// Accessing elements and iterating over an array
// Small, focused examples with comments explaining the rule.

// A typed array (prefer TypeScript examples when type context helps)
const numbers: number[] = [10, 20, 30, 40, 50];

// Access by index (zero-based)
const first = numbers[0]; // 10
const third = numbers[2]; // 30

// Safe access to the last element with `at()` (ES2022)
const last = numbers.at(-1); // 50

// Out-of-bounds access returns `undefined`
const missing = numbers[10]; // undefined

// Classic indexed `for` loop — useful when you need the index
for (let i = 0; i < numbers.length; i++) {
  console.log(`index ${i}:`, numbers[i]);
}

// `for...of` — concise iteration over values
for (const value of numbers) {
  console.log("value:", value);
}

// `forEach` — callback with value and index (no `break`)
numbers.forEach((value, index) => {
  console.log(`forEach ${index}:`, value);
});

// `map` — transform values into a new array
const doubled = numbers.map((n) => n * 2);
console.log("doubled:", doubled);

// `filter` & `reduce` are common combinators used during iteration
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("evens:", evens, "sum:", sum);
