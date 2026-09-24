# Graph Report - Smooth-dev  (2026-09-24)

## Corpus Check
- 44 files · ~497,280 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 324 nodes · 469 edges · 21 communities (19 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8b7e9e8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 33 edges
2. `compilerOptions` - 16 edges
3. `compilerOptions` - 14 edges
4. `DesignSystemGenerator` - 11 edges
5. `useSEO()` - 11 edges
6. `Quick Reference` - 11 edges
7. `_search_csv()` - 8 edges
8. `Prerequisites` - 8 edges
9. `derive_row()` - 7 edges
10. `BM25` - 7 edges

## Surprising Connections (you probably didn't know these)
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .claude/skills/ui-ux-pro-max/scripts/design_system.py → .claude/skills/ui-ux-pro-max/scripts/core.py
- `About()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/About.tsx → src/contexts/LanguageContext.tsx
- `FinalCTA()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/FinalCTA.tsx → src/contexts/LanguageContext.tsx
- `Hero()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Hero.tsx → src/contexts/LanguageContext.tsx
- `HomeServices()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/HomeServices.tsx → src/contexts/LanguageContext.tsx

## Import Cycles
- None detected.

## Communities (21 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (34): Contact(), fadeUp, Footer(), Header(), LanguageToggle(), Logo(), LogoProps, fadeUp (+26 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (31): ansi_ljust(), DesignSystemGenerator, _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system() (+23 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (24): About(), fadeUp, FinalCTA(), fadeUp, HomeServices(), fadeUp, Filter, Services() (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (31): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Common Sticking Points, Example Workflow, How to Use This Skill, Icons & Visual Elements (+23 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), BM25 ranking algorithm for text search, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts (+7 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (18): 10. Charts & Data (LOW), 1. Accessibility (CRITICAL), 2. Touch & Interaction (CRITICAL), 3. Performance (HIGH), 4. Style Selection (HIGH), 5. Layout & Responsive (HIGH), 6. Typography & Color (MEDIUM), 7. Animation (MEDIUM) (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleDetection, moduleResolution (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (16): dependencies, framer-motion, lucide-react, react, react-dom, react-router-dom, @supabase/supabase-js, name (+8 more)

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (17): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+9 more)

### Community 9 - "Community 9"
Cohesion: 0.23
Nodes (12): Hero(), PlasmaState, ShaderBackground(), ShaderBackgroundProps, getFragmentShader(), initShaderProgram(), loadShader(), PlasmaShaderHandle (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.23
Nodes (14): BuildGlyph(), CleaningGlyph(), DatabaseGlyph(), DiagnosticsGlyph(), EcommerceGlyph(), IconProps, MobileGlyph(), OnboardingGlyph() (+6 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (13): blend(), derive_row(), derive_ui_reasoning(), h2r(), is_dark(), lum(), on_color(), r2h() (+5 more)

## Knowledge Gaps
- **136 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+131 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `Community 0` to `Community 9`, `Community 2`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Prerequisites` connect `Community 3` to `Community 5`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `search()` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `Generate full 16-token color row from 4 base colors.`, `Generate ui-reasoning row from products.csv row.`, `BM25 ranking algorithm for text search` to the rest of the system?**
  _167 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07205387205387205 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07307692307692308 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07954545454545454 - nodes in this community are weakly interconnected._