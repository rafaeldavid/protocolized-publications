/**
 * comment-mode.bundle.js
 *
 * Copy-editor mode for protocolized.dev — adapted from the npc.here.now
 * template's gutter+selection+modal pattern, simplified for a single
 * Before/After/Note edit-suggestion flow that POSTs to the worker.
 *
 * Activation:
 *   1. Editor opens any site page with ?edit=<passcode>  (e.g.
 *      https://protocolized.dev/?edit=hunter2 ).
 *   2. Bundle reads passcode from URL, stores in sessionStorage,
 *      strips the param from the URL, and goes live.
 *   3. Subsequent navigations within the same session stay in edit
 *      mode (sessionStorage persists across same-tab page loads).
 *   4. Cmd/Ctrl + Shift + E opens a passcode prompt as a fallback.
 *   5. "Leave" button clears sessionStorage and reloads.
 *
 * Submission:
 *   POST <ENDPOINT>/comment
 *   Header  X-Comment-Passcode: <passcode>
 *   Body    { page, before, suggestion, note, reviewer }
 *
 * Style scope:
 *   All classes prefixed with `cmm-`. All styles injected via a single
 *   <style> tag with high specificity. Nothing else in the host page
 *   should conflict.
 */

(function () {
  'use strict';

  // Don't double-load if the script is included twice.
  if (window.__cmmEditModeBundle) return;
  window.__cmmEditModeBundle = true;

  // ─── Constants ────────────────────────────────────────────────────────
  const ENDPOINT      = 'https://protocolized-inbox.rafaeldf2.workers.dev/comment';
  const SESSION_KEY   = 'cmm_edit_pass';
  const REVIEWER_KEY  = 'cmm_reviewer';
  const ENTRIES_KEY   = 'cmm_session_edits';   // list of submitted edits, persists across pages
  const HIDDEN_KEY    = 'cmm_gutter_hidden';   // boolean: editor toggled "Hide comments"
  const ENTRIES_LIMIT = 200;                   // safety cap on per-browser stored edits

  // ─── Activation gate ──────────────────────────────────────────────────
  function readPasscode() {
    try {
      const url = new URL(location.href);
      const fromUrl = url.searchParams.get('edit');
      if (fromUrl) {
        sessionStorage.setItem(SESSION_KEY, fromUrl);
        url.searchParams.delete('edit');
        const search = url.searchParams.toString();
        const newPath = url.pathname + (search ? '?' + search : '') + url.hash;
        history.replaceState({}, '', newPath);
        return fromUrl;
      }
      return sessionStorage.getItem(SESSION_KEY);
    } catch (e) {
      return null;
    }
  }

  function promptForPasscode() {
    const pc = window.prompt('Enter copy-editor passcode:', '');
    if (pc && pc.trim()) {
      sessionStorage.setItem(SESSION_KEY, pc.trim());
      location.reload();
    }
  }

  // Cmd/Ctrl + Shift + E — keyboard shortcut for the same prompt.
  function bindActivationShortcut() {
    document.addEventListener('keydown', function (e) {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.shiftKey &&
                         (e.key === 'E' || e.key === 'e');
      if (!isShortcut) return;
      e.preventDefault();
      promptForPasscode();
    });
  }

  // Easter-egg sign-in icon — a tiny pencil glyph at the far right of
  // the page's primary nav. Discoverable on hover; nothing for a normal
  // reader; the way an editor would enter without typing in the URL bar.
  function mountSigninIcon() {
    if (document.getElementById('cmm-signin-btn')) return;

    // Inject minimal styles for the icon (these are harmless even when
    // edit mode is dormant; full bundle CSS is only injected on activation).
    if (!document.getElementById('cmm-signin-styles')) {
      const s = document.createElement('style');
      s.id = 'cmm-signin-styles';
      s.textContent =
        '.cmm-signin-li { list-style: none; display: flex; align-items: center; }' +
        '#cmm-signin-btn {' +
          ' background: transparent; border: 0; padding: 4px 6px;' +
          ' cursor: pointer; opacity: 0.32;' +
          ' color: inherit; line-height: 0;' +
          ' transition: opacity 200ms, color 200ms, transform 200ms;' +
          ' display: inline-flex; align-items: center; justify-content: center;' +
          ' border-radius: 2px;' +
        '}' +
        '#cmm-signin-btn:hover {' +
          ' opacity: 1; color: #7d5a96; transform: translateY(-1px);' +
        '}' +
        '#cmm-signin-btn:focus-visible {' +
          ' opacity: 1; color: #7d5a96; outline: 1px dashed rgba(125, 90, 150, 0.5);' +
          ' outline-offset: 2px;' +
        '}' +
        '#cmm-signin-btn svg { display: block; width: 14px; height: 14px; }' +
        /* if the page is in edit mode, hide the sign-in icon (banner already shows status) */
        'body.cmm-active #cmm-signin-btn { display: none; }';
      document.head.appendChild(s);
    }

    // 14x14 pencil glyph — outline only, current-color fill so it inherits.
    const icon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M9.6 1.6 L12.4 4.4 L4.6 12.2 L1.6 12.6 L2 9.6 Z"/>' +
        '<path d="M8.6 2.6 L11.4 5.4"/>' +
      '</svg>';

    const btn = document.createElement('button');
    btn.id = 'cmm-signin-btn';
    btn.type = 'button';
    btn.title = 'Editor sign-in (⌘⇧E)';
    btn.setAttribute('aria-label', 'Editor sign-in');
    btn.innerHTML = icon;
    btn.addEventListener('click', function (e) { e.preventDefault(); promptForPasscode(); });

    const navList = document.querySelector('.nav-links');
    if (navList) {
      const li = document.createElement('li');
      li.className = 'cmm-signin-li';
      li.appendChild(btn);
      navList.appendChild(li);
      return;
    }

    const navInner = document.querySelector('nav .nav-inner') || document.querySelector('nav');
    if (navInner) {
      navInner.appendChild(btn);
      return;
    }

    // No nav found — float at top-right as a last resort.
    btn.style.cssText = 'position: fixed; top: 12px; right: 12px; z-index: 90000;';
    document.body.appendChild(btn);
  }

  function whenReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  bindActivationShortcut();
  whenReady(mountSigninIcon);

  const passcode = readPasscode();
  if (!passcode) return;     // not in edit mode; bundle goes dormant

  // ─── Styles ───────────────────────────────────────────────────────────
  const css = [
    '#cmm-banner {',
    '  position: fixed; top: 0; left: 0; right: 0; z-index: 99000;',
    '  background: linear-gradient(180deg, #1a1a2e 0%, #2a1f3d 100%);',
    '  color: #fafafa;',
    '  font-family: "Roboto Mono", ui-monospace, Menlo, monospace;',
    '  font-size: 12px; line-height: 1.4;',
    '  display: flex; align-items: center; gap: 14px;',
    '  padding: 8px 16px; height: 40px;',
    '  border-bottom: 1px solid rgba(168, 136, 191, 0.4);',
    '  box-shadow: 0 2px 8px rgba(0,0,0,0.18);',
    '  letter-spacing: 0.04em;',
    '}',
    '#cmm-banner .cmm-tag {',
    '  background: #a888bf; color: #1a1a2e; font-weight: 700;',
    '  padding: 3px 8px; border-radius: 2px; letter-spacing: 0.16em;',
    '  font-size: 10px; text-transform: uppercase;',
    '}',
    '#cmm-banner .cmm-page-pill {',
    '  background: rgba(255,255,255,0.08); padding: 3px 8px;',
    '  border-radius: 2px; color: rgba(255,255,255,0.7);',
    '  font-size: 11px; max-width: 240px; overflow: hidden;',
    '  text-overflow: ellipsis; white-space: nowrap;',
    '}',
    '#cmm-banner .cmm-hint {',
    '  color: rgba(255,255,255,0.55); font-size: 11px;',
    '  flex: 1; min-width: 0;',
    '}',
    '#cmm-banner input#cmm-reviewer {',
    '  background: rgba(255,255,255,0.08); color: #fafafa;',
    '  border: 1px solid rgba(255,255,255,0.16); border-radius: 2px;',
    '  font-family: inherit; font-size: 11px; padding: 4px 8px; width: 140px;',
    '  outline: none; transition: border-color 160ms;',
    '}',
    '#cmm-banner input#cmm-reviewer:focus { border-color: #a888bf; }',
    '#cmm-banner input#cmm-reviewer::placeholder { color: rgba(255,255,255,0.4); }',
    '#cmm-banner button#cmm-leave, #cmm-banner button#cmm-browse-toggle {',
    '  background: transparent; color: rgba(255,255,255,0.78);',
    '  border: 1px solid rgba(255,255,255,0.2); border-radius: 2px;',
    '  font-family: inherit; font-size: 11px; padding: 4px 10px; cursor: pointer;',
    '  letter-spacing: 0.08em; text-transform: uppercase; transition: all 160ms;',
    '}',
    '#cmm-banner button#cmm-leave:hover,',
    '#cmm-banner button#cmm-browse-toggle:hover,',
    '#cmm-banner button#cmm-browse-toggle.is-open {',
    '  color: #fafafa; border-color: rgba(255,255,255,0.5);',
    '}',
    '#cmm-banner button#cmm-browse-toggle.is-open {',
    '  background: rgba(168, 136, 191, 0.22); border-color: #a888bf;',
    '}',
    'body.cmm-active { padding-top: 40px !important; }',
    /* Browse dropdown panel */
    '#cmm-browse-panel {',
    '  position: fixed; top: 40px; left: 0; right: 0; z-index: 99050;',
    '  background: #1a1a2e; color: #fafafa;',
    '  border-bottom: 1px solid #a888bf;',
    '  font-family: "Inter", system-ui, sans-serif;',
    '  display: none; box-shadow: 0 8px 24px rgba(0,0,0,0.35);',
    '  max-height: calc(100vh - 80px); overflow-y: auto;',
    '}',
    '#cmm-browse-panel.is-open { display: block; }',
    '#cmm-browse-panel .cmm-bp-inner {',
    '  max-width: 1200px; margin: 0 auto;',
    '  padding: 18px 24px 22px;',
    '}',
    '#cmm-browse-panel .cmm-bp-section { margin-bottom: 18px; }',
    '#cmm-browse-panel .cmm-bp-section:last-child { margin-bottom: 0; }',
    '#cmm-browse-panel .cmm-bp-head {',
    '  font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  letter-spacing: 0.22em; text-transform: uppercase;',
    '  color: #a888bf; font-weight: 700;',
    '  margin-bottom: 8px;',
    '  display: flex; align-items: baseline; justify-content: space-between;',
    '}',
    '#cmm-browse-panel .cmm-bp-head .cmm-bp-meta {',
    '  font-weight: 400; color: rgba(255,255,255,0.45);',
    '  letter-spacing: 0.14em; font-size: 10px;',
    '}',
    '#cmm-browse-panel .cmm-bp-grid {',
    '  display: grid; gap: 6px;',
    '  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));',
    '}',
    '#cmm-browse-panel .cmm-bp-item {',
    '  background: rgba(255,255,255,0.04); color: #fafafa;',
    '  border: 1px solid rgba(255,255,255,0.10); border-radius: 2px;',
    '  font-family: "Roboto Mono", monospace; font-size: 11.5px;',
    '  padding: 8px 10px; cursor: pointer; text-decoration: none;',
    '  display: flex; flex-direction: column; gap: 2px;',
    '  letter-spacing: 0.04em; transition: all 160ms;',
    '  font-weight: 500;',
    '}',
    '#cmm-browse-panel .cmm-bp-item:hover {',
    '  border-color: #a888bf; background: rgba(168, 136, 191, 0.18);',
    '  color: #fafafa;',
    '}',
    '#cmm-browse-panel .cmm-bp-item-sub {',
    '  font-family: inherit; font-size: 10px;',
    '  color: rgba(255,255,255,0.45); font-weight: 400;',
    '  letter-spacing: 0.06em;',
    '}',
    '#cmm-browse-panel .cmm-bp-row {',
    '  display: flex; gap: 6px; align-items: stretch; flex-wrap: wrap;',
    '  margin-top: 8px;',
    '}',
    '#cmm-browse-panel .cmm-bp-builder {',
    '  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10);',
    '  border-radius: 2px; padding: 10px 12px;',
    '  display: flex; gap: 8px; align-items: center; flex-wrap: wrap;',
    '}',
    '#cmm-browse-panel .cmm-bp-builder label {',
    '  font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  letter-spacing: 0.16em; text-transform: uppercase;',
    '  color: rgba(255,255,255,0.55);',
    '}',
    '#cmm-browse-panel .cmm-bp-builder select {',
    '  background: #0a0810; color: #fafafa;',
    '  border: 1px solid rgba(255,255,255,0.18); border-radius: 2px;',
    '  font-family: "Roboto Mono", monospace; font-size: 11px;',
    '  padding: 4px 8px; outline: none; cursor: pointer;',
    '}',
    '#cmm-browse-panel .cmm-bp-builder select:focus { border-color: #a888bf; }',
    '#cmm-browse-panel .cmm-bp-builder .cmm-bp-go {',
    '  background: #a888bf; color: #1a1a2e; border: 0;',
    '  font-family: "Roboto Mono", monospace; font-size: 10px; font-weight: 700;',
    '  letter-spacing: 0.14em; text-transform: uppercase;',
    '  padding: 5px 12px; border-radius: 2px; cursor: pointer;',
    '  transition: all 160ms;',
    '}',
    '#cmm-browse-panel .cmm-bp-builder .cmm-bp-go:hover { background: #fafafa; }',
    '@media (max-width: 720px) {',
    '  #cmm-browse-panel { top: auto; bottom: 0; max-height: 70vh; border-bottom: 0; border-top: 1px solid #a888bf; }',
    '  #cmm-browse-panel .cmm-bp-inner { padding: 14px 14px 18px; }',
    '  #cmm-browse-panel .cmm-bp-grid { grid-template-columns: repeat(2, 1fr); }',
    '}',
    '',
    /* Selection popup */
    '#cmm-sel-popup {',
    '  position: absolute; z-index: 99100; transform: translateX(-50%);',
    '  background: #1a1a2e; color: #fafafa;',
    '  border-radius: 3px; padding: 4px;',
    '  display: none; box-shadow: 0 6px 20px rgba(0,0,0,0.35);',
    '  font-family: "Roboto Mono", ui-monospace, monospace;',
    '}',
    '#cmm-sel-popup.open { display: flex; }',
    '#cmm-sel-popup::after {',
    '  content: ""; position: absolute; bottom: -5px; left: 50%;',
    '  transform: translateX(-50%);',
    '  border-left: 5px solid transparent; border-right: 5px solid transparent;',
    '  border-top: 5px solid #1a1a2e;',
    '}',
    '#cmm-sel-popup button {',
    '  background: transparent; color: #fafafa; border: 0;',
    '  font-family: inherit; font-size: 12px; padding: 6px 10px;',
    '  cursor: pointer; border-radius: 2px; letter-spacing: 0.04em;',
    '  font-weight: 500;',
    '}',
    '#cmm-sel-popup button:hover { background: #a888bf; color: #1a1a2e; }',
    '',
    /* Modal */
    '#cmm-modal {',
    '  position: fixed; inset: 0; z-index: 99500;',
    '  background: rgba(10, 8, 28, 0.55);',
    '  display: none; align-items: flex-start; justify-content: center;',
    '  padding: 80px 20px 40px; overflow-y: auto;',
    '  -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px);',
    '}',
    '#cmm-modal.open { display: flex; }',
    '#cmm-modal .cmm-modal-card {',
    '  background: #fafafa; color: #1a1a2e;',
    '  border: 1px solid #e5e5e7; border-radius: 4px;',
    '  width: 100%; max-width: 560px;',
    '  font-family: "Inter", system-ui, sans-serif;',
    '  box-shadow: 0 20px 60px rgba(0,0,0,0.35);',
    '  overflow: hidden;',
    '}',
    '#cmm-modal .cmm-modal-head {',
    '  background: #f3eef7;',
    '  border-bottom: 1px solid #e5e5e7;',
    '  padding: 14px 20px;',
    '  display: flex; align-items: center; justify-content: space-between;',
    '  gap: 12px;',
    '}',
    '#cmm-modal .cmm-modal-eyebrow {',
    '  font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  letter-spacing: 0.18em; text-transform: uppercase;',
    '  color: #7d5a96; font-weight: 700;',
    '}',
    '#cmm-modal .cmm-modal-page {',
    '  font-family: "Roboto Mono", monospace; font-size: 11px;',
    '  color: #6b6b7b; max-width: 240px; overflow: hidden;',
    '  text-overflow: ellipsis; white-space: nowrap;',
    '}',
    '#cmm-modal .cmm-modal-body { padding: 18px 20px 20px; }',
    '#cmm-modal .cmm-row { margin-bottom: 14px; }',
    '#cmm-modal .cmm-row:last-of-type { margin-bottom: 0; }',
    '#cmm-modal label {',
    '  display: block; font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b7b;',
    '  margin-bottom: 6px; font-weight: 500;',
    '}',
    '#cmm-modal label .cmm-optional {',
    '  font-weight: 400; opacity: 0.6; text-transform: none;',
    '  letter-spacing: 0.04em;',
    '}',
    '#cmm-modal .cmm-before-readonly {',
    '  background: #f3eef7; border: 1px solid #e5e5e7; border-radius: 2px;',
    '  padding: 10px 12px; font-size: 14px; line-height: 1.5;',
    '  color: #1a1a2e; font-style: italic; font-family: inherit;',
    '  max-height: 120px; overflow-y: auto;',
    '  white-space: pre-wrap; word-wrap: break-word;',
    '}',
    '#cmm-modal textarea {',
    '  width: 100%; box-sizing: border-box;',
    '  background: #fff; border: 1px solid #e5e5e7; border-radius: 2px;',
    '  padding: 10px 12px; font-family: inherit; font-size: 14px;',
    '  line-height: 1.5; color: #1a1a2e; resize: vertical;',
    '  outline: none; transition: border-color 160ms, box-shadow 160ms;',
    '}',
    '#cmm-modal textarea:focus {',
    '  border-color: #a888bf; box-shadow: 0 0 0 2px #f3eef7;',
    '}',
    '#cmm-modal #cmm-after { min-height: 70px; }',
    '#cmm-modal #cmm-note { min-height: 50px; }',
    '#cmm-modal .cmm-actions {',
    '  display: flex; justify-content: flex-end; gap: 8px;',
    '  margin-top: 18px; padding-top: 14px; border-top: 1px solid #e5e5e7;',
    '}',
    '#cmm-modal button {',
    '  font-family: "Roboto Mono", monospace; font-size: 11px;',
    '  font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;',
    '  padding: 8px 14px; border-radius: 2px; cursor: pointer;',
    '  transition: all 160ms;',
    '}',
    '#cmm-modal button.cmm-ghost {',
    '  background: transparent; color: #6b6b7b; border: 1px solid #e5e5e7;',
    '}',
    '#cmm-modal button.cmm-ghost:hover { color: #1a1a2e; border-color: #6b6b7b; }',
    '#cmm-modal button.cmm-primary {',
    '  background: #7d5a96; color: #fff; border: 1px solid #7d5a96;',
    '}',
    '#cmm-modal button.cmm-primary:hover { background: #1a1a2e; border-color: #1a1a2e; }',
    '#cmm-modal button.cmm-primary:disabled {',
    '  opacity: 0.6; cursor: wait;',
    '}',
    '',
    /* Gutter (right side, fixed, shows session edits) */
    '#cmm-gutter {',
    '  position: fixed; top: 56px; right: 12px; z-index: 98000;',
    '  width: 280px; max-height: calc(100vh - 80px);',
    '  overflow-y: auto; pointer-events: none;',
    '  display: flex; flex-direction: column; gap: 8px;',
    '}',
    '#cmm-gutter .cmm-gutter-head {',
    '  pointer-events: auto;',
    '  align-self: flex-end;',
    '  background: #fafafa; color: #1a1a2e;',
    '  border: 1px solid #e5e5e7; border-radius: 2px;',
    '  font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  letter-spacing: 0.14em; text-transform: uppercase;',
    '  padding: 0; cursor: default;',
    '  font-weight: 600;',
    '  box-shadow: 0 4px 10px rgba(0,0,0,0.08);',
    '  display: flex; align-items: stretch;',
    '}',
    '#cmm-gutter .cmm-gutter-toggle, #cmm-gutter .cmm-gutter-clear {',
    '  background: transparent; border: 0; color: inherit;',
    '  font-family: inherit; font-size: inherit; font-weight: inherit;',
    '  letter-spacing: inherit; text-transform: inherit;',
    '  padding: 5px 10px; cursor: pointer;',
    '  transition: background 160ms;',
    '}',
    '#cmm-gutter .cmm-gutter-toggle:hover,',
    '#cmm-gutter .cmm-gutter-clear:hover { background: #f3eef7; }',
    '#cmm-gutter .cmm-gutter-clear {',
    '  border-left: 1px solid #e5e5e7; color: #6b6b7b;',
    '}',
    '#cmm-gutter .cmm-gutter-clear:hover { color: #c44a1f; }',
    '#cmm-gutter .cmm-gutter-toggle .cmm-count {',
    '  background: #a888bf; color: #fff; padding: 1px 6px;',
    '  border-radius: 6px; margin-left: 6px;',
    '}',
    '#cmm-gutter.is-collapsed .cmm-gutter-list { display: none; }',
    '#cmm-gutter .cmm-gutter-list {',
    '  pointer-events: auto;',
    '  display: flex; flex-direction: column; gap: 8px;',
    '}',
    '#cmm-gutter .cmm-gutter-item {',
    '  background: #fafafa; border: 1px solid #e5e5e7;',
    '  border-left: 3px solid #a888bf; border-radius: 2px;',
    '  padding: 10px 12px;',
    '  font-family: "Inter", system-ui, sans-serif; font-size: 12px;',
    '  line-height: 1.45; color: #1a1a2e;',
    '  box-shadow: 0 4px 10px rgba(0,0,0,0.08);',
    '  position: relative;',
    '}',
    '#cmm-gutter .cmm-gutter-item.is-cross-page { border-left-color: #c8c4b3; }',
    '#cmm-gutter .cmm-gi-page {',
    '  font-family: "Roboto Mono", monospace; font-size: 9.5px;',
    '  color: #6b6b7b; letter-spacing: 0.14em; text-transform: uppercase;',
    '  margin-bottom: 4px; padding-right: 18px;',
    '  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
    '}',
    '#cmm-gutter .cmm-gi-page strong { color: #1a1a2e; font-weight: 600; }',
    '#cmm-gutter .cmm-gi-x {',
    '  position: absolute; top: 6px; right: 8px;',
    '  background: transparent; border: 0; color: #c8c4b3;',
    '  font-family: "Roboto Mono", monospace; font-size: 14px;',
    '  cursor: pointer; padding: 0 4px; line-height: 1;',
    '  transition: color 160ms;',
    '}',
    '#cmm-gutter .cmm-gi-x:hover { color: #c44a1f; }',
    /* hidden state — banner toggle drives this */
    '#cmm-gutter.is-hidden { display: none; }',
    '#cmm-gutter .cmm-gi-before {',
    '  font-style: italic; color: #6b6b7b;',
    '  text-decoration: line-through;',
    '  text-decoration-color: rgba(107, 107, 123, 0.4);',
    '  margin-bottom: 4px; word-wrap: break-word;',
    '}',
    '#cmm-gutter .cmm-gi-arrow {',
    '  font-family: "Roboto Mono", monospace; color: #a888bf;',
    '  font-size: 10px; margin: 2px 0; letter-spacing: 0.16em;',
    '  text-transform: uppercase; font-weight: 700;',
    '}',
    '#cmm-gutter .cmm-gi-after {',
    '  color: #1a1a2e; margin-bottom: 6px; word-wrap: break-word;',
    '}',
    '#cmm-gutter .cmm-gi-note {',
    '  font-family: "Roboto Mono", monospace; font-size: 10.5px;',
    '  color: #6b6b7b; padding-top: 6px; margin-top: 6px;',
    '  border-top: 1px dashed #e5e5e7; font-style: italic;',
    '  word-wrap: break-word;',
    '}',
    '#cmm-gutter .cmm-gi-meta {',
    '  font-family: "Roboto Mono", monospace; font-size: 10px;',
    '  color: #2b8a8a; letter-spacing: 0.12em; text-transform: uppercase;',
    '  margin-top: 6px; font-weight: 600;',
    '}',
    '',
    /* Inline highlight on edited text */
    'mark.cmm-marked {',
    '  background: #f3eef7; border-bottom: 2px solid #a888bf;',
    '  padding: 0 0.05em; color: inherit;',
    '}',
    '',
    /* Toast */
    '#cmm-toast {',
    '  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(20px);',
    '  background: #1a1a2e; color: #fafafa;',
    '  font-family: "Roboto Mono", monospace; font-size: 12px;',
    '  padding: 10px 18px; border-radius: 3px;',
    '  letter-spacing: 0.04em; z-index: 99700;',
    '  opacity: 0; pointer-events: none; transition: all 220ms;',
    '  box-shadow: 0 8px 24px rgba(0,0,0,0.3);',
    '}',
    '#cmm-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }',
    '#cmm-toast.error { background: #c44a1f; }',
    '',
    /* Mobile */
    '@media (max-width: 720px) {',
    '  #cmm-banner { font-size: 11px; padding: 6px 10px; gap: 8px; flex-wrap: wrap; height: auto; min-height: 40px; }',
    '  #cmm-banner .cmm-hint, #cmm-banner .cmm-page-pill { display: none; }',
    '  #cmm-banner input#cmm-reviewer { width: 90px; }',
    '  body.cmm-active { padding-top: 48px !important; }',
    '  #cmm-gutter { width: calc(100vw - 24px); top: auto; bottom: 12px; right: 12px; max-height: 50vh; }',
    '  #cmm-modal { padding: 40px 12px; }',
    '}',
  ].join('\n');

  const styleEl = document.createElement('style');
  styleEl.id = 'cmm-styles';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ─── DOM scaffolding ──────────────────────────────────────────────────
  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') e.className = attrs[k];
        else if (k === 'text') e.textContent = attrs[k];
        else if (k === 'html') e.innerHTML = attrs[k];
        else e.setAttribute(k, attrs[k]);
      });
    }
    if (children) children.forEach(function (c) {
      if (typeof c === 'string') e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function pageLabel() {
    const p = location.pathname || '/';
    return p.length > 64 ? p.slice(0, 61) + '...' : p;
  }

  // ─── Editor catalog data (canonical from assessment/index.html) ─────
  const ARCHETYPES = [
    { key: 'Vanguard',   blurb: 'transformer, stake-holder' },
    { key: 'Traveller',  blurb: 'experimenter, free-floating' },
    { key: 'Architect',  blurb: 'systems builder, strategic' },
    { key: 'Integrator', blurb: 'wiring across, embedded' },
    { key: 'Tinkerer',   blurb: 'craft, individual taste' },
    { key: 'Ratifier',   blurb: 'sanctioner, governance-led' },
    { key: 'Warden',     blurb: 'risk-first, gating' },
    { key: 'Broker',     blurb: 'connector, vendor-savvy' },
    { key: 'Folkway',    blurb: 'culture, peer-to-peer' },
    { key: 'Guild',      blurb: 'craft community, shared' }
  ];
  const LEVELS = [
    { key: 'L1',    label: 'L1 · Shadow' },
    { key: 'L1-L2', label: 'L1 → L2' },
    { key: 'L2',    label: 'L2 · Sanctioned' },
    { key: 'L2-3',  label: 'L2 → L3' },
    { key: 'L3',    label: 'L3 · Designed' },
    { key: 'L3-4',  label: 'L3 → L4' },
    { key: 'L4',    label: 'L4 · Infrastructural' },
    { key: 'L4-5',  label: 'L4 → L5' },
    { key: 'L5',    label: 'L5 · Planetary' }
  ];
  // Default counterpart used when one axis is unspecified.
  const DEFAULT_LEVEL = 'L3';
  const DEFAULT_ARCHETYPE = 'Vanguard';
  // Result page lives at /assessment/ — admin URL params route directly to result.
  const ASSESSMENT_URL = 'https://protocolized.dev/assessment/';

  function adminUrl(archetype, level) {
    return ASSESSMENT_URL + '?archetype=' + encodeURIComponent(archetype) +
           '&level=' + encodeURIComponent(level);
  }

  // Banner
  const banner = el('div', { id: 'cmm-banner' });
  banner.innerHTML =
    '<span class="cmm-tag">EDIT MODE</span>' +
    '<button id="cmm-browse-toggle" type="button" title="Editor catalog: archetypes, levels, quiz">▾ Browse</button>' +
    '<button id="cmm-hide-toggle" type="button" title="Show/hide the comments gutter on the right">Hide</button>' +
    '<span class="cmm-page-pill">' + escapeHtml(pageLabel()) + '</span>' +
    '<input id="cmm-reviewer" type="text" placeholder="reviewer name" maxlength="80" autocomplete="off">' +
    '<span class="cmm-hint">Highlight any text → Suggest edit · ⌘⇧E to re-enter passcode · Esc to close</span>' +
    '<button id="cmm-leave" type="button">Leave</button>';

  // Browse panel (drops down from the banner on click)
  const browsePanel = el('div', { id: 'cmm-browse-panel', role: 'dialog', 'aria-label': 'Editor catalog' });

  function renderBrowsePanel() {
    const archetypeItems = ARCHETYPES.map(function (a) {
      return '<a class="cmm-bp-item" href="' + escapeHtml(adminUrl(a.key, DEFAULT_LEVEL)) + '" target="_blank" rel="noopener">' +
               '<span>' + escapeHtml(a.key) + '</span>' +
               '<span class="cmm-bp-item-sub">' + escapeHtml(a.blurb) + '</span>' +
             '</a>';
    }).join('');

    const levelItems = LEVELS.map(function (l) {
      return '<a class="cmm-bp-item" href="' + escapeHtml(adminUrl(DEFAULT_ARCHETYPE, l.key)) + '" target="_blank" rel="noopener">' +
               '<span>' + escapeHtml(l.label) + '</span>' +
               '<span class="cmm-bp-item-sub">with ' + escapeHtml(DEFAULT_ARCHETYPE) + '</span>' +
             '</a>';
    }).join('');

    const builderArchOpts = ARCHETYPES.map(function (a) {
      return '<option value="' + escapeHtml(a.key) + '">' + escapeHtml(a.key) + '</option>';
    }).join('');
    const builderLvlOpts = LEVELS.map(function (l) {
      return '<option value="' + escapeHtml(l.key) + '"' + (l.key === DEFAULT_LEVEL ? ' selected' : '') + '>' + escapeHtml(l.label) + '</option>';
    }).join('');

    browsePanel.innerHTML =
      '<div class="cmm-bp-inner">' +

        '<div class="cmm-bp-section">' +
          '<div class="cmm-bp-head">' +
            '<span>Archetypes (' + ARCHETYPES.length + ')</span>' +
            '<span class="cmm-bp-meta">opens with default level ' + DEFAULT_LEVEL + ' · new tab</span>' +
          '</div>' +
          '<div class="cmm-bp-grid">' + archetypeItems + '</div>' +
        '</div>' +

        '<div class="cmm-bp-section">' +
          '<div class="cmm-bp-head">' +
            '<span>Levels (' + LEVELS.length + ')</span>' +
            '<span class="cmm-bp-meta">includes the 4 transitions · paired with ' + DEFAULT_ARCHETYPE + '</span>' +
          '</div>' +
          '<div class="cmm-bp-grid">' + levelItems + '</div>' +
        '</div>' +

        '<div class="cmm-bp-section">' +
          '<div class="cmm-bp-head">' +
            '<span>Pick a specific combination</span>' +
            '<span class="cmm-bp-meta">10 archetypes × 9 levels = 90 result pages</span>' +
          '</div>' +
          '<div class="cmm-bp-builder">' +
            '<label for="cmm-bp-arch">Archetype</label>' +
            '<select id="cmm-bp-arch">' + builderArchOpts + '</select>' +
            '<label for="cmm-bp-lvl">Level</label>' +
            '<select id="cmm-bp-lvl">' + builderLvlOpts + '</select>' +
            '<button class="cmm-bp-go" id="cmm-bp-go" type="button">Open ↗</button>' +
          '</div>' +
        '</div>' +

        '<div class="cmm-bp-section">' +
          '<div class="cmm-bp-head">' +
            '<span>Quiz</span>' +
            '<span class="cmm-bp-meta">25 forced-choice items · v0.9</span>' +
          '</div>' +
          '<div class="cmm-bp-row">' +
            '<a class="cmm-bp-item" href="https://protocolized.dev/assessment/" target="_blank" rel="noopener" style="grid-column: span 2;">' +
              '<span>Take the quiz</span>' +
              '<span class="cmm-bp-item-sub">live · no admin params</span>' +
            '</a>' +
          '</div>' +
        '</div>' +

      '</div>';
  }
  renderBrowsePanel();

  // Selection popup
  const popup = el('div', { id: 'cmm-sel-popup' });
  popup.innerHTML = '<button id="cmm-suggest" type="button">✏ Suggest edit</button>';

  // Modal
  const modal = el('div', { id: 'cmm-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Edit suggestion' });
  modal.innerHTML =
    '<div class="cmm-modal-card">' +
      '<div class="cmm-modal-head">' +
        '<span class="cmm-modal-eyebrow">Edit suggestion</span>' +
        '<span class="cmm-modal-page">' + escapeHtml(pageLabel()) + '</span>' +
      '</div>' +
      '<div class="cmm-modal-body">' +
        '<div class="cmm-row">' +
          '<label>Before</label>' +
          '<div id="cmm-before" class="cmm-before-readonly"></div>' +
        '</div>' +
        '<div class="cmm-row">' +
          '<label>After</label>' +
          '<textarea id="cmm-after" rows="3" placeholder="Your suggested edit"></textarea>' +
        '</div>' +
        '<div class="cmm-row">' +
          '<label>Note <span class="cmm-optional">— optional, why this change</span></label>' +
          '<textarea id="cmm-note" rows="2" placeholder="e.g. clarity / cuts a redundancy / corrects fact"></textarea>' +
        '</div>' +
        '<div class="cmm-actions">' +
          '<button id="cmm-cancel" class="cmm-ghost" type="button">Cancel</button>' +
          '<button id="cmm-submit" class="cmm-primary" type="button">Send to editor</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Gutter
  const gutter = el('div', { id: 'cmm-gutter', class: 'is-collapsed' });
  gutter.innerHTML =
    '<div class="cmm-gutter-head">' +
      '<button class="cmm-gutter-toggle" type="button">' +
        'Session edits <span class="cmm-count">0</span>' +
      '</button>' +
      '<button class="cmm-gutter-clear" type="button" title="Remove all stored edits from this browser (does not delete from server)">Clear</button>' +
    '</div>' +
    '<div class="cmm-gutter-list"></div>';

  // Toast
  const toastEl = el('div', { id: 'cmm-toast', role: 'status', 'aria-live': 'polite' });

  document.body.appendChild(banner);
  document.body.appendChild(browsePanel);
  document.body.appendChild(popup);
  document.body.appendChild(modal);
  document.body.appendChild(gutter);
  document.body.appendChild(toastEl);
  document.body.classList.add('cmm-active');

  // ─── Browse panel toggle + URL builder ───────────────────────────────
  const browseToggle = banner.querySelector('#cmm-browse-toggle');
  function toggleBrowse(open) {
    const isOpen = open !== undefined ? open : !browsePanel.classList.contains('is-open');
    browsePanel.classList.toggle('is-open', isOpen);
    browseToggle.classList.toggle('is-open', isOpen);
    browseToggle.setAttribute('aria-expanded', String(isOpen));
  }
  browseToggle.addEventListener('click', function (e) { e.preventDefault(); toggleBrowse(); });

  const goBtn = browsePanel.querySelector('#cmm-bp-go');
  goBtn.addEventListener('click', function () {
    const arch = browsePanel.querySelector('#cmm-bp-arch').value;
    const lvl  = browsePanel.querySelector('#cmm-bp-lvl').value;
    window.open(adminUrl(arch, lvl), '_blank', 'noopener');
  });

  // Close panel on outside click (but not on banner clicks)
  document.addEventListener('mousedown', function (e) {
    if (!browsePanel.classList.contains('is-open')) return;
    if (browsePanel.contains(e.target) || banner.contains(e.target)) return;
    toggleBrowse(false);
  });

  // ─── Reviewer name (sticky across sessions) ──────────────────────────
  const reviewerInput = banner.querySelector('#cmm-reviewer');
  reviewerInput.value = localStorage.getItem(REVIEWER_KEY) || '';
  reviewerInput.addEventListener('input', function () {
    localStorage.setItem(REVIEWER_KEY, reviewerInput.value.trim());
  });

  // ─── Leave button ────────────────────────────────────────────────────
  banner.querySelector('#cmm-leave').addEventListener('click', function () {
    sessionStorage.removeItem(SESSION_KEY);
    location.reload();
  });

  // ─── Selection handling ──────────────────────────────────────────────
  let lastSelection = null;
  let lastRange = null;

  function showPopup(rect, text, range) {
    const top = rect.top + window.scrollY - 42;
    const left = rect.left + window.scrollX + (rect.width / 2);
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';
    popup.classList.add('open');
    lastSelection = text;
    lastRange = range.cloneRange();
  }

  function hidePopup() {
    popup.classList.remove('open');
  }

  function selectionInsideUi(range) {
    const node = range.commonAncestorContainer;
    const root = node.nodeType === 1 ? node : node.parentElement;
    if (!root) return false;
    return !!root.closest('#cmm-banner, #cmm-modal, #cmm-sel-popup, #cmm-gutter, #cmm-toast');
  }

  document.addEventListener('mouseup', function () {
    setTimeout(function () {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) { hidePopup(); return; }
      const text = sel.toString().trim();
      if (text.length < 2) { hidePopup(); return; }
      const range = sel.getRangeAt(0);
      if (selectionInsideUi(range)) { hidePopup(); return; }
      const rect = range.getBoundingClientRect();
      if (!rect || (rect.width === 0 && rect.height === 0)) { hidePopup(); return; }
      showPopup(rect, text, range);
    }, 10);
  });

  // Hide popup on click outside (but not if click is on popup itself)
  document.addEventListener('mousedown', function (e) {
    if (popup.contains(e.target)) return;
    if (!modal.classList.contains('open')) hidePopup();
  });

  // ─── Open modal ──────────────────────────────────────────────────────
  popup.querySelector('#cmm-suggest').addEventListener('click', function () {
    if (!lastSelection) return;
    const beforeEl = modal.querySelector('#cmm-before');
    const afterEl = modal.querySelector('#cmm-after');
    const noteEl = modal.querySelector('#cmm-note');
    beforeEl.textContent = lastSelection;
    afterEl.value = lastSelection;
    noteEl.value = '';
    modal.classList.add('open');
    setTimeout(function () { afterEl.focus(); afterEl.select(); }, 60);
    hidePopup();
  });

  // ─── Modal close paths ───────────────────────────────────────────────
  modal.querySelector('#cmm-cancel').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal.classList.contains('open')) closeModal();
      else if (browsePanel.classList.contains('is-open')) toggleBrowse(false);
    }
    // Cmd/Ctrl+Enter submits
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && modal.classList.contains('open')) {
      e.preventDefault();
      submit();
    }
  });
  function closeModal() {
    modal.classList.remove('open');
  }

  // ─── Submit ──────────────────────────────────────────────────────────
  const submitBtn = modal.querySelector('#cmm-submit');
  submitBtn.addEventListener('click', submit);

  async function submit() {
    const before = modal.querySelector('#cmm-before').textContent.trim();
    const after  = modal.querySelector('#cmm-after').value.trim();
    const note   = modal.querySelector('#cmm-note').value.trim();
    const reviewer = (reviewerInput.value || '').trim() || 'anon';

    if (!before) { toast('Selection lost. Try again.', true); return; }
    if (after === before && !note) {
      toast('Edit is identical and no note. Add a change or note.', true);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Comment-Passcode': passcode
        },
        body: JSON.stringify({
          page: location.pathname || '/',
          before: before,
          suggestion: after,
          note: note,
          reviewer: reviewer
        })
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (res.ok) {
        toast('Sent to editor.');
        addEntry({
          id:         (data && data.id) ? data.id : 'local-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
          ts:         new Date().toISOString(),
          page:       location.pathname || '/',
          before:     before,
          suggestion: after,
          note:       note,
          reviewer:   reviewer
        });
        markSelectionInBody();
        closeModal();
      } else if (res.status === 401) {
        toast('Wrong passcode. Edit mode disabled.', true);
        sessionStorage.removeItem(SESSION_KEY);
        setTimeout(function () { location.reload(); }, 1800);
      } else if (res.status === 429) {
        toast('Rate limited. Try again in a few minutes.', true);
      } else if (res.status === 503) {
        toast('Comment endpoint not configured on server.', true);
      } else {
        toast('Error: ' + (data.error || res.status), true);
      }
    } catch (err) {
      toast('Network error. Try again.', true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send to editor';
    }
  }

  // ─── Mark selection in body ──────────────────────────────────────────
  function markSelectionInBody() {
    if (!lastRange) return;
    try {
      const m = document.createElement('mark');
      m.className = 'cmm-marked';
      m.appendChild(lastRange.extractContents());
      lastRange.insertNode(m);
      // Clear stored range so it can't be reused
      lastRange = null;
      lastSelection = null;
      window.getSelection().removeAllRanges();
    } catch (e) {
      // Range may have been disturbed by DOM manipulation; ignore.
    }
  }

  // ─── Gutter (persisted across pages via localStorage) ────────────────
  const gutterList = gutter.querySelector('.cmm-gutter-list');
  const countEl    = gutter.querySelector('.cmm-count');
  const currentPath = location.pathname || '/';

  // Load + persist
  function loadEntries() {
    try {
      const raw = localStorage.getItem(ENTRIES_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }
  function saveEntries(arr) {
    try {
      const trimmed = arr.length > ENTRIES_LIMIT ? arr.slice(arr.length - ENTRIES_LIMIT) : arr;
      localStorage.setItem(ENTRIES_KEY, JSON.stringify(trimmed));
    } catch (e) { /* quota or disabled — ignore */ }
  }

  let entries = loadEntries();

  function refreshCount() {
    countEl.textContent = String(entries.length);
  }

  function renderEntry(entry) {
    const item = el('div', {
      class: 'cmm-gutter-item' + (entry.page !== currentPath ? ' is-cross-page' : ''),
      'data-id': entry.id
    });
    const before = entry.before || '';
    const after  = entry.suggestion || '';
    const note   = entry.note || '';
    const beforeText = before.length > 240 ? before.slice(0, 237) + '...' : before;
    const afterText  = after.length  > 240 ? after.slice(0, 237)  + '...' : after;
    const pageLabelTxt = entry.page === currentPath ? 'this page' : entry.page;
    item.innerHTML =
      '<button class="cmm-gi-x" type="button" aria-label="Remove from local view" title="Remove from local view (does not delete from server)">×</button>' +
      '<div class="cmm-gi-page"><strong>' + escapeHtml(pageLabelTxt) + '</strong></div>' +
      '<div class="cmm-gi-before">' + escapeHtml(beforeText) + '</div>' +
      '<div class="cmm-gi-arrow">↓ becomes</div>' +
      '<div class="cmm-gi-after">' + escapeHtml(afterText) + '</div>' +
      (note ? '<div class="cmm-gi-note">' + escapeHtml(note) + '</div>' : '') +
      '<div class="cmm-gi-meta">✓ sent · ' + escapeHtml((entry.reviewer || 'anon')) + '</div>';
    item.querySelector('.cmm-gi-x').addEventListener('click', function (e) {
      e.stopPropagation();
      removeEntry(entry.id);
    });
    return item;
  }

  function rerenderAll() {
    gutterList.innerHTML = '';
    // Newest first
    for (let i = entries.length - 1; i >= 0; i--) {
      gutterList.appendChild(renderEntry(entries[i]));
    }
    refreshCount();
  }

  function addEntry(entry) {
    entries.push(entry);
    saveEntries(entries);
    refreshCount();
    gutterList.insertBefore(renderEntry(entry), gutterList.firstChild);
    // Auto-open the gutter on first edit (per page-load)
    if (entries.length === 1) gutter.classList.remove('is-collapsed');
  }

  function removeEntry(id) {
    entries = entries.filter(function (e) { return e.id !== id; });
    saveEntries(entries);
    const node = gutterList.querySelector('[data-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')) + '"]');
    if (node) node.parentNode.removeChild(node);
    refreshCount();
  }

  function clearAll() {
    if (entries.length === 0) return;
    const ok = window.confirm(
      'Remove all ' + entries.length + ' edit(s) from this browser?\n\n' +
      'Server-side records are NOT affected — they remain available via the CSV export.'
    );
    if (!ok) return;
    entries = [];
    saveEntries(entries);
    gutterList.innerHTML = '';
    refreshCount();
  }

  // Wire gutter header buttons
  gutter.querySelector('.cmm-gutter-toggle').addEventListener('click', function () {
    gutter.classList.toggle('is-collapsed');
  });
  gutter.querySelector('.cmm-gutter-clear').addEventListener('click', clearAll);

  // Initial render of persisted entries
  if (entries.length > 0) {
    rerenderAll();
    gutter.classList.remove('is-collapsed');
  }

  // ─── Hide/show toggle from the banner ───────────────────────────────
  const hideToggle = banner.querySelector('#cmm-hide-toggle');
  function applyHidden(hidden) {
    gutter.classList.toggle('is-hidden', hidden);
    hideToggle.textContent = hidden ? 'Show' : 'Hide';
    hideToggle.title = hidden
      ? 'Show the comments gutter (currently hidden)'
      : 'Hide the comments gutter (data stays in your browser)';
  }
  applyHidden(localStorage.getItem(HIDDEN_KEY) === '1');
  hideToggle.addEventListener('click', function () {
    const next = !gutter.classList.contains('is-hidden');
    applyHidden(next);
    try { localStorage.setItem(HIDDEN_KEY, next ? '1' : '0'); } catch (e) {}
  });

  // ─── Toast ───────────────────────────────────────────────────────────
  let toastTimer = null;
  function toast(msg, isError) {
    toastEl.textContent = msg;
    toastEl.classList.toggle('error', !!isError);
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 3500);
  }

  // ─── Ready ───────────────────────────────────────────────────────────
  // eslint-disable-next-line no-console
  console.info('[CMM] Edit mode active. Highlight text to suggest edits.');
})();
