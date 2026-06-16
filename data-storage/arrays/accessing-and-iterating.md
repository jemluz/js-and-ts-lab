## Arrays - Accessing and iterating

See [accessing-and-iterating](./accessing-and-iterating.ts) for the runnable TypeScript example.

Initial array:

```ts
const numbers: number[] = [10, 20, 30, 40, 50];
```

```
Index:      0    1    2    3    4
		 +----+----+----+----+----+
Value:   | 10 | 20 | 30 | 40 | 50 |
  		 +----+----+----+----+----+
Length: 5
```

1. Access by index (zero-based)

```ts
const first = numbers[0];
const third = numbers[2];
```

Expected values:

- `first` is `10`
- `third` is `30`

2. Access the last element with `at(-1)`

```ts
const last = numbers.at(-1);
```

Expected value:

- `last` is `50`

3. Out-of-bounds access

```ts
const missing = numbers[10];
```

Expected value:

- `missing` is `undefined`

4. Iterate with a classic `for` loop

```ts
for (let i = 0; i < numbers.length; i++) {
  console.log(`index ${i}:`, numbers[i]);
}
```

Output:

```text
index 0: 10
index 1: 20
index 2: 30
index 3: 40
index 4: 50
```

5. Iterate with `for...of`

```ts
for (const value of numbers) {
  console.log("value:", value);
}
```

Output:

```text
value: 10
value: 20
value: 30
value: 40
value: 50
```

6. Iterate with `forEach`

```ts
numbers.forEach((value, index) => {
  console.log(`forEach ${index}:`, value);
});
```

Output:

```text
forEach 0: 10
forEach 1: 20
forEach 2: 30
forEach 3: 40
forEach 4: 50
```

7. Transform and aggregate

```ts
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

Expected values:

- `doubled` is `[20, 40, 60, 80, 100]`
- `evens` is `[10, 20, 30, 40, 50]`
- `sum` is `150`

Notes:

- Index access is constant-time, usually `O(1)`.
- `forEach` is convenient, but you cannot stop it early with `break`.
- `map`, `filter`, and `reduce` create expressive iteration pipelines.
