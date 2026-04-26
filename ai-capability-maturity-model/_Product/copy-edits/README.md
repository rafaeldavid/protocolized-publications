# Copy-edit triage

Daily-pulled raw queue of edit suggestions submitted via the in-page editor mode (FEATURE-004). Maintained automatically by a scheduled remote agent; synthesised manually into `Backlog.md` items by hand.

## How it works

```
Editor on protocolized.dev   →   POST /comment   →   Cloudflare KV (EDITS)
                                                          │
                                            (daily, 5am UTC)
                                                          ↓
                            scheduled remote agent  →  GET /comment/export.csv
                                                          │
                              filter against triage-state.json["imported_ids"]
                                                          │
                                       new rows → triage.md (append)
                                       new ids  → triage-state.json (append)
                                                          │
                                              git commit + push
```

## Files

- **`triage.md`** — append-only queue of new edits, grouped by date heading. Each entry uses the source-edit ID as its sub-heading so it's anchorable and searchable. **Do not edit by hand.** Synthesise into Backlog.md instead, then leave the entry here as the audit trail.
- **`triage-state.json`** — `{ imported_ids: [...], last_pull: "<iso>" }`. Driven by the agent. Don't edit unless you're forcibly resyncing.
- **`AGENT-PROMPT.md`** — exact prompt the daily routine runs. Kept in the repo so the agent's behaviour is reviewable.

## Synthesis (your weekly editorial pass)

1. Open `triage.md`. Read the new entries (probably grouped under a fresh date heading).
2. Cluster related ones — multiple edits to the same paragraph; multiple suggestions on the same page; etc.
3. For each cluster, write a `CONTENT-###` (or appropriate code) item in `Backlog.md`. Include a provenance comment listing the source edit IDs:
   ```
   <!-- src: edit:2026-04-26T03:48:52.709Z:86cd48e5, edit:2026-04-26T03:49:26.576Z:6828bd66 -->
   ```
4. Leave the triage entries as-is. The agent never deletes from triage.md; you can manually strikethrough or annotate `→ CONTENT-###` if you want a visual cue.

## Pruning the KV store (manual, when you're ready)

The agent **never deletes from KV**. The KV store accumulates indefinitely. To prune the entries you've already imported:

```bash
cd _Infrastructure/protocolized-inbox/

# Pull the imported list (jq required)
ids=$(jq -r '.imported_ids[]' ../../ai-capability-maturity-model/_Product/copy-edits/triage-state.json)

for id in $ids; do
  npx wrangler kv key delete "$id" --binding=EDITS --remote
done
```

(or just delete by hand from the wrangler CLI when you want.)

## Failure modes + recovery

- **Agent fails to pull (worker down, secret rotated, etc.):** the agent should exit with a clear error in its session log. Next run picks up where it left off — `imported_ids` is the source of truth, so missed days don't cause duplication.
- **Duplicate run on same day:** safe — dedupe is by ID, which is per-row.
- **Manual force-resync:** delete `triage-state.json` (or set `imported_ids: []`). Next run will treat every KV row as new and append all of them. The agent will not modify entries already in `triage.md` — those will simply have duplicates appended below.
- **Triage.md got too long:** archive by hand. Move old date-sections to `triage-archive-YYYY-MM.md`. Keeps the live file readable.
