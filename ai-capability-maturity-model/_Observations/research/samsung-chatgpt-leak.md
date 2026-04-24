---
id: event-samsung-chatgpt-leak
category: event
date_observed: 2023-04
date_added: 2026-04-24
source_quality: secondary
status: active
affected_levels: [1]
affected_functions: [engineering]
tags: [shadow-ai, data-leak, enterprise-ban, canonical-case]
sources:
  - url: https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak
    title: Samsung Bans ChatGPT Among Employees After Sensitive Code Leak (Bloomberg)
  - url: https://www.forbes.com/sites/siladityaray/2023/05/02/samsung-bans-chatgpt-and-other-chatbots-for-employees-after-sensitive-code-leak/
    title: Samsung Bans ChatGPT For Employees After Sensitive Code Leak (Forbes)
maintainer: rafa
---

# Samsung ChatGPT leak (April 2023)

## Summary
Three Samsung Semiconductor engineers pasted proprietary source code and internal meeting notes into ChatGPT in a 20-day window (late March–April 2023). The exposure was discovered weeks later; Samsung first capped input to 1024 bytes, then banned generative AI on corporate devices outright on 2 May 2023.

## Why it matters for the CMM
Canonical Level-1 (Shadow) case. Three features make it paradigmatic:
1. Use was individual, unauthorized, and driven by real productivity benefit.
2. Exposure was invisible until it wasn't — there was no monitoring, only an after-the-fact discovery.
3. The organizational response (ban) treated the symptom and left the demand pattern (engineers needing AI assistance) unmet, pushing the same behavior onto personal devices.

It exemplifies the Level-1 failure mode: organizational risk accumulating silently while individual productivity gains go uncaptured by the firm.

## Claims citable from this observation
- Three separate incidents occurred within 20 days of ChatGPT being permitted for internal use
- Samsung's first mitigation was a technical one (1024-byte input cap) before the outright ban
- The ban explicitly included "ChatGPT, Bard, Bing, and other generative AI tools"
- Company memo cited "transmission of sensitive information" as the specific failure mode

## Related observations
- (pending) shadow-ai-prevalence-roundup — IBM data showing shadow AI incidents cost $4.63M on average
