// we can use destructuring in arrays to declare variables
let [x, y] = ['a', 'b'];

// the code above it's the same as doing that:
// let x = 'a';
// let y = 'b';

// Basic destructuring = automaticaly get corresponding index
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(third);  // Output: 30

// Skipping elements destructuring = each comma skips a index
const data = ["apple", "banana", "cherry"];
const [, , lastFruit] = data; // Skips "apple" and "banana"

console.log(lastFruit); // Output: "cherry"

// Default values on destructuring
// also see /functions/default-params.ts
const colors = ["red"];
const [primary, secondary = "blue"] = colors;

console.log(primary);   // Output: "red"
console.log(secondary); // Output: "blue"

// Destructuring function params
// Arrays passed as function parameters can also be destructured directly in the function signature.
function printCoordinates([x, y]: [number, number]) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([100, 200]); // Output: X: 100, Y: 200