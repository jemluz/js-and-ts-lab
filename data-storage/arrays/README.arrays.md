# Why Should We Use Arrays?

## Definition

Arrays are data structures that store a collection of elements, each identified by at least one array index or key. They can hold a fixed number of elements of the same type, and the size of the array is defined when the array is created.

## Example

```js
const colors = ["red", "green", "blue", "yellow"];
```

Visual representation:

```
Index:   	 0         1         2        3
		 +--------+---------+--------+----------+
Value:   | "red"  | "green" | "blue" | "yellow" |
		 +--------+---------+--------+----------+
```

## Common Use Cases

1. **Storing Collections of Data**: Arrays are used to store multiple items of the same type together, like a list of student scores or names.
2. **Implementing Data Structures**: Arrays serve as a base for other complex data structures like **stacks, queues, matrices, and heaps**.
3. **Iterating Over Data**: They allow easy traversal of items for searching, sorting, and applying operations across all elements.

## Trade-offs

- **Fixed Size**: The size of an array **is fixed upon creation**, which can lead to wasted memory or insufficient memory if the capacity is exceeded.

- **Performance**: Accessing elements in an array is efficient, but inserting or deleting elements, especially in the middle, can be costly in terms of time complexity.

- ✅ Good to access elements
- ❌ Bad to insertion and deletion, specially in the middle

## Time Complexity Table

| Operation              | Time Complexity  |
| ---------------------- | ---------------- |
| Access                 | O(1)             |
| Append                 | O(1) (amortized) |
| Prepend                | O(n)             |
| Insert/Delete (middle) | O(n)             |
| Search                 | O(n)             |

# Methods and Patterns

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
