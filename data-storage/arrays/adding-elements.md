## Arrays - Adding elements

See [adding-elements](./adding-elements.ts) for the runnable TypeScript example.

Initial array:

```js
const fruits = ["apple", "banana"];
```

```
Index:    0         1
         +---------+----------+
Value:   | "apple" | "banana" |
         +---------+----------+
Length: 2
```

1. Add at the end with index == length

```js
fruits[fruits.length] = "cherry";
```

```
Index:    0         1         2
         +---------+----------+----------+
Value:   | "apple" | "banana" | "cherry" |
         +---------+----------+----------+
Length: 3
```

2. Add at the end with push (multiple items)

```js
const lengthAfterPush = fruits.push("date", "fig");
// lengthAfterPush === 5
```

```
Index:    0         1         2         3       4
         +---------+----------+----------+-------+------+
Value:   | "apple" | "banana" | "cherry" | "date" | "fig" |
         +---------+----------+----------+-------+------+
Length: 5
```

3. Add at the start with unshift

```js
const lengthAfterUnshift = fruits.unshift("avocado");
// lengthAfterUnshift === 6
```

```
Index:    0           1         2         3        4      5
         +-----------+---------+----------+----------+------+------+
Value:   | "avocado" | "apple" | "banana" | "cherry" | "date" | "fig" |
         +-----------+---------+----------+----------+------+------+
Length: 6
```

Notes:

- `push` appends at the end and returns the new length.
- `unshift` inserts at the start and returns the new length.
- End insertion is usually cheaper than start insertion.
