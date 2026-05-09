// we can add elements to an array using various methods, each with its own performance characteristics. Here are some common ways to add elements to an array in TypeScript:

const fruits: string[] = ["apple", "banana"];
console.log("initial:", fruits); // ["apple", "banana"]

// 1) Add at the end with index == length.
fruits[fruits.length] = "cherry";
console.log("after index append:", fruits); // ["apple", "banana", "cherry"]

// 2) push adds one or more items to the end and returns the new length.
const lengthAfterPush = fruits.push("date", "fig");
console.log("after push:", fruits, "new length:", lengthAfterPush);

// 3) unshift adds one or more items to the beginning and returns the new length.
const lengthAfterUnshift = fruits.unshift("avocado");
console.log("after unshift:", fruits, "new length:", lengthAfterUnshift);

// End insertion is usually cheaper than start insertion.
// Appending is amortized O(1), prepending is O(n) due to element shifts.
