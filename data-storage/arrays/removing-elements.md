## Arrays - Removing elements

See [removing-elements](./removing-elements.ts) for the runnable TypeScript example.

Initial array:

```ts
const removableFruits: string[] = ["apple", "banana", "cherry", "date"];
```

```
Index:    0         1         2         3
         +---------+----------+----------+--------+
Value:   | "apple" | "banana" | "cherry" | "date" |
         +---------+----------+----------+--------+
Length: 4
```

1. Remove from the end with pop

```ts
const removedFromEnd = removableFruits.pop();
```

Expected values:

- removableFruits is ["apple", "banana", "cherry"]
- removedFromEnd is "date"

```
Index:    0         1         2
         +---------+----------+----------+
Value:   | "apple" | "banana" | "cherry" |
         +---------+----------+----------+
Length: 3
```

2. Another way block (manual overwrite)

```ts
for (let i = 0; removableFruits.length < 3; i++) {
  removableFruits[i] = removableFruits[i + i];
}
```

In this exact script state, this loop does not run because the length is already 3 after pop.

3. Remove from the start with shift

```ts
const removedFromStart = removableFruits.shift();
```

Expected values:

- removableFruits is ["banana", "cherry"]
- removedFromStart is "apple"

4. Remove from a specific position with splice

```ts
const removedBySplice = removableFruits.splice(0, 1);
```

Expected values:

- removableFruits is ["cherry"]
- removedBySplice is ["banana"]

Notes:

- pop removes the last item and returns it.
- shift removes the first item and returns it.
- splice(start, deleteCount) mutates the array and returns removed items.
- Removing from the end is usually cheaper than removing from the start.
- push/pop fit stack behavior (LIFO), and unshift/shift fit queue behavior (FIFO).
