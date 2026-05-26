# CallCoach — Intralinks Deal Intelligence

*Last updated: May 26, 2026*

## What this is

A sales coaching and deal intelligence dashboard built for Intralinks (SS&C). Analyzes real Salesloft call transcripts against MEDDPICCCC, Command of the Message, Transition Motion (VDR→DCAI/FundCentre), AI Story quality, Multi-Threading, and Q2 Close Signal.

Built as a prototype to show leadership the "art of the possible" with AI-powered sales coaching.

**Live URL:** https://callcoach-rust.vercel.app

---

## Current architecture

Single-file standalone HTML dashboard (`index.html`) with 33 real Intralinks calls pre-analyzed and hardcoded. No live API connection required — all data is embedded.

### Why hardcoded?
The Salesloft API key is valid but Intralinks' Salesloft org has an admin-configured IP allowlist that blocks external server calls (e.g. from Vercel). Calls from the browser's own machine would work, but server-side proxying is blocked. The hardcoded approach is actually better for a leadership demo — fully controlled, no loading delays, consistent data.

### File structure (GitHub: stefanrogalskidev/callcoach)
```
api/
  sl.js          ← Salesloft proxy (unused in current hardcoded version, kept for future)
  analyze.js     ← Anthropic proxy (unused in current hardcoded version, kept for future)
index.html       ← Full standalone dashboard, all 33 calls embedded
package.json
vercel.json
README.md        ← This file
```

---

## Dashboard views

### 📊 Executive Dashboard
- KPI strip: Closeable Q2 / Possible Q2 / Unlikely Q2 counts + ARR, active reps, avg call score
- Deals grouped by Q2 signal with account, rep, stage, ARR, score, AI story rating
- Filter by rep, signal, stage, or search

### 📞 All Calls
- Full sortable table of all 33 calls
- Same filter controls

### 🎯 Team Coaching
- All calls sorted by overall score
- Score, AI story, value vs. feature, transition score, multi-thread score, top priority per call

### Coaching Panel (click any deal)
- Q2 signal + reason
- Stage, ARR, close quarter
- Overall / MEDDPICCCC / Transition / Multi-Thread scores
- Salesloft recap (where available)
- AI story rating + coaching note
- Top wins / top priorities
- Multi-thread action
- Copy-ready suggested next step
- MEDDPICCCC tab: element-by-element scores + coaching
- Value vs. Feature tab
- Transition & Threading tab

---

## Scoring frameworks

### MEDDPICCCC (10 elements)
M = Metrics, E = Economic Buyer, Dc = Decision Criteria, Dp = Decision Process, P = Paper Process, I = Identified Pain, Ch = Champion, Co = Competition, Ce = Compelling Event, Cp = Closing Plan

Each scored: **strong / partial / missing / na**

### AI Story (sharp / partially_sharp / generic / n/a)
Bar for "sharp": rep must articulate:
1. SS&C sovereign AI — model + fine-tuning + hosting inside the perimeter (self-hosted, not outsourced)
2. Stack control argument — Intralinks controls the full AI stack end-to-end
3. Competitor comparison — Datasite uses acquired Blueflame (outsourced reasoning layer); Intralinks built in-house

Two questions every rep must answer:
- Where does your data go during AI processing?
- Who controls the AI stack?

### Transition Motion (0–100)
VDR → DCAI / FundCentre platform motion:
- VDR as Entry Point
- DCAI/FundCentre Introduction
- Competitive Displacement
- Next Platform Conversation

### Multi-Threading (0–100)
- Org Mapping
- Adjacent Stakeholders
- Strategic AI & Data Questions
- Platform Consolidation Angle

### Q2 Signal (green / amber / red)
- 🟢 Closeable: hard deadline in Q2, late-stage, specific next step
- 🟡 Possible: active engagement, Q2 close date, but blocker or dependency exists
- 🔴 Unlikely: early stage, no urgency, no timeline

### Value vs. Feature (value_led / mixed / feature_led)
Whether the rep anchored the pitch to buyer outcomes vs. product features

---

## 33 calls in the dashboard

| # | Account | Rep | Date | Signal | Score |
|---|---------|-----|------|--------|-------|
| 1 | Globalfoundries | Meghan Brennan | 2026-05-15 | 🟢 | 68 |
| 2 | Nektar Therapeutics | Scott Martin | 2026-04-30 | 🔴 | 38 |
| 3 | MetLife | Meghan Brennan | 2026-05-19 | 🟡 | 52 |
| 4 | NiKang Therapeutics | Graham McIntire | 2026-05-21 | 🔴 | 55 |
| 5 | Prudential | Meghan Brennan | 2026-05-05 | 🔴 | 28 |
| 6 | SiFive | Scott Martin | 2026-05-20 | 🔴 | 42 |
| 7 | Sling TV (Call 1) | Meghan Brennan | 2026-04-30 | 🟡 | 35 |
| 8 | Sling TV (Call 2) | Meghan Brennan | 2026-05-21 | 🟢 | 58 |
| 9 | The Richman Group | Amanda Coleman | 2026-05-15 | 🟢 | 48 |
| 10 | Ullico | David DeLuca | 2026-04-30 | 🟢 | 62 |
| 11 | 4DMT (Call 1) | Connor Moran | 2026-05-05 | 🟡 | 65 |
| 12 | 4DMT (Call 2) | Connor Moran | 2026-04-30 | 🟡 | 55 |
| 13 | US Bank | Stephen Chirico | 2026-04-30 | 🟢 | 82 |
| 14 | Blue Torch Capital | Tim Murphy | 2026-05-01 | 🔴 | 38 |
| 15 | Piper Sandler | Jack Lunden | 2026-05-05 | 🔴 | 32 |
| 16 | EnCap / Quantica | Jonathan Schaffer | 2026-05-06 | 🟢 | 71 |
| 17 | Disney | Johnny Rooney | 2026-05-02 | 🟡 | 52 |
| 18 | Guggenheim | Madison Calderin | 2026-05-01 | 🟡 | 55 |
| 19 | Inovia Capital | Kiley O'Leary | 2026-05-01 | 🟡 | 61 |
| 20 | Centerview Partners | Jack Lunden | 2026-05-06 | 🔴 | 48 |
| 21 | Behrman Capital | Ethan Katz | 2026-05-13 | 🟡 | 62 |
| 22 | PMCF | Colleen Lafeber | 2026-05-15 | 🟡 | 58 |
| 23 | PSC (Project Telluride) | Jack Lunden | 2026-05-18 | 🟢 | 72 |
| 24 | Mudrick Capital | Tim Murphy | 2026-05-19 | 🟡 | 64 |
| 25 | Stonehill Capital | Charles Maier | 2026-05-19 | 🟢 | 60 |
| 26 | Sebastiano / DCAI Orientation | Unknown Rep | 2026-05-19 | 🔴 | 40 |
| 27 | Main Street Capital | Dante Flick | 2026-05-19 | 🟡 | 55 |
| 28 | Third Lake | Elena Kulakovska | 2026-05-20 | 🟡 | 58 |
| 29 | Project Chartley | Martha Montgomery | 2026-05-21 | 🟡 | 65 |
| 30 | Franklin Park | Dave Yi | 2026-05-21 | 🟢 | 52 |
| 31 | Amentum | Daniel Kelly | 2026-05-21 | 🟡 | 66 |
| 32 | D.E. Shaw (internal prep) | Dave Yi | 2026-05-04 | 🟡 | 38 |
| 33 | Element Capital | Dave Yi | 2026-05-14 | 🟢 | 42 |

---

## Deployment

**Platform:** Vercel (auto-deploys from GitHub main branch)
**GitHub:** https://github.com/stefanrogalskidev/callcoach
**Vercel project:** callcoach (rogalski@sssinc.com account)

### Environment variables (set in Vercel)
- `SALESLOFT_API_KEY` — valid key but blocked by Salesloft IP allowlist; not used in current hardcoded version
- `ANTHROPIC_API_KEY` — set; not used in current hardcoded version

### To deploy an update
1. Edit `index.html` locally (or in GitHub UI)
2. Commit to `main` branch
3. Vercel auto-redeploys in ~30 seconds

---

## Salesloft API (for future live mode)

**API Key:** Stored in Vercel env var (do not commit to repo)
**Scopes:** accounts:read, people:read, opportunities:read, activities:read, calls:read, conversations:read, crm:read
**Blocker:** Intralinks Salesloft org has IP allowlist — blocks Vercel server IPs. To enable live mode, Salesloft admin would need to whitelist Vercel's IP ranges.

**API endpoints used:**
- `GET /v2/users/me.json` — connection test
- `GET /v2/conversations/calls` — list calls with pagination
- `GET /v2/conversations/calls/{id}` — call detail + transcript

---

## Claude analysis prompt (for adding new calls)

When adding new transcripts, analyze against this framework and produce JSON matching the schema in `index.html`'s CALLS array. Key fields:

```json
{
  "account": "Account Name",
  "rep": "Primary Rep",
  "all_reps": "All reps on call",
  "date": "YYYY-MM-DD",
  "duration": "HH:MM:SS",
  "overall_score": 0-100,
  "deal_context": "1-2 sentence deal context",
  "summary": "2-3 sentence coaching summary",
  "sf_stage": "Discover|Define & Validate Solution|Propose|Negotiate and Close|...",
  "estimated_arr": 0,
  "close_quarter": "Q2 2026|Q3 2026|...",
  "q2_signal": "green|amber|red",
  "q2_label": "Closeable Q2|Possible Q2|Unlikely Q2",
  "q2_reason": "One sentence reason",
  "ai_story": {
    "came_up": true,
    "sharp_or_generic": "sharp|partially_sharp|generic|n/a",
    "how_handled": "Description",
    "coaching": "Coaching note"
  },
  "value_vs_feature": {
    "score": "value_led|mixed|feature_led",
    "evidence": "What happened",
    "coaching": "Coaching note"
  },
  "meddpicccc_scores": {"M":"strong|partial|missing|na", ...},
  "meddpicccc_coaching": {"M":"note", ...},
  "transition_score": 0-100,
  "transition_summary": "One sentence",
  "multithread_score": 0-100,
  "multithread_summary": "One sentence",
  "top_multithread_action": "Single most important action",
  "top_wins": ["win1", "win2", "win3"],
  "top_priorities": ["p1", "p2", "p3"],
  "suggested_next_step": "Exact verbatim follow-up language"
}
```

---

## Intralinks product context (for coaching calibration)

- **DealCentre AI (DCAI)** — M&A/Banking/Corporates platform. End-to-end deal platform: marketing prep, diligence, post-deal analytics. Ask Link (AI Q&A), AI Insights (doc summaries, redaction), Document Requests, 3 document repositories (internal/prep/diligence).
- **VIA Elite** — Subscription renewal product for existing VDR clients
- **FundCentre AI** — Alternatives/private markets: Fundraising, Onboarding, Reporting (InvestorVision rebranded), InView (LP aggregation), CRM. Unifying into one platform Q4 2026.
- **VDR Pro** — Legacy product being sunset for new business; existing clients being migrated to DCAI
- **AI architecture** — Self-hosted Llama inside SS&C sovereign perimeter. SS&C controls model + fine-tuning + hosting. Data never leaves the perimeter. DealCentre Connect (MCP) announced Q2 2026 — connects Claude, Copilot, Rogo to Link (the in-perimeter AI engine).
- **Datasite competitor** — Uses acquired Blueflame AI (external, separate product, separate license). Three separate cloud environments. Launched MCP April 28, 2026 (first VDR to launch). Intralinks launched shortly after with superior architecture (Link inside the connector vs. Blueflame overlay).

## Key reps in the dashboard

| Rep | Segment | Notes |
|-----|---------|-------|
| Meghan Brennan | B&C Renewals | Most active rep in dataset |
| Tim Murphy | Alts (New England) | FundCentre specialist |
| Dave Yi | Alts Renewals | Renewal specialist |
| Connor Moran | Alts | Works with Meghan |
| Jack Lunden | Banking/Advisory | DCAI demo specialist |
| Stephen Chirico | B&C Renewals | SVP-level, sophisticated negotiator |
| Scott Martin | Alts | Discovery-focused |
| Madison Calderin | Banking | Transition calls |
| Amanda Coleman | B&C | Newer rep |
| Jonathan Schaffer | Advisory | New business |
| Kiley O'Leary | Alts (FundCentre) | DDQ specialist |
| Graham McIntire | Alts | Relationship-focused |
| David DeLuca | B&C | Renewal specialist |
| Ethan Katz | Alts (FundCentre) | Reporting specialist |
| Colleen Lafeber | Banking | DCAI adoption |
| Charles Maier | Alts | Migration specialist |
| Dante Flick | Alts | Onsite/field |
| Elena Kulakovska | Alts | New business |
| Martha Montgomery | B&C (CSM) | Onboarding/CSM |
| Daniel Kelly | Corporates | Discovery specialist |
| Johnny Rooney | Banking | Existing accounts |
| Justin Simonsen | Alts | SE/demo support |
