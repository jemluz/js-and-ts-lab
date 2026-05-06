# Arrays — Methods and Patterns

A compact guide to array helpers and common patterns. Place short examples next to each heading; if the book doesn't cover these before the end, create `array-methods.ts` with runnable examples.

Order of topics and example suggestions

1. Transformers
   - `map`, `flatMap`
2. Selectors / Filters
   - `filter`, `find`, `findIndex`
3. Reducers / Aggregators
   - `reduce`, `reduceRight` (sums, grouping, partitioning)
4. Tests / Predicates
   - `some`, `every`, `includes`
5. Searching / Indices
   - `indexOf`, `lastIndexOf`
6. Non‑mutating combiners / copying
   - `slice`, `concat`, spread (`[...arr]`), `Array.from`, `Array.of`
7. Mutating mutators (show immutability alternatives)
   - `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`, `copyWithin`
8. Flattening / Depth
   - `flat` (and `flatMap` note)
9. Iteration helpers / views
   - `forEach`, `entries`, `keys`, `values`, `at`
10. Construction / conversion
   - `join`, `toString`, `toLocaleString`
11. Utilities / type checks
   - `Array.isArray`, typed arrays (`Uint8Array`, `Float32Array`)
12. Higher‑level patterns
   - grouping (`reduce` / `Map`), dedup (`Set`), chunking, zipping, immutability patterns
13. Libraries / helpers
   - mention `lodash`, `ramda` for `groupBy`, `chunk`, `uniq`, etc.

Notes

- Prefer small, focused examples that show input → transformation → result.
- Indicate mutation vs non‑mutation and show immutable alternatives where relevant.
- If you want, I can create `data-storage/arrays/array-methods.ts` with concise examples for each heading.
