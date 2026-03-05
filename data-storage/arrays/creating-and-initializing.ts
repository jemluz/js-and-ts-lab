// Arrays can be created in several ways depending on readability and intent.

// 1) Literal syntax: most common and explicit.
const emptyWithLiteral: number[] = [];
const initializedWithLiteral: number[] = [1, 2, 3];

console.log(emptyWithLiteral); // []
console.log(initializedWithLiteral); // [1, 2, 3]

// 2) Constructor syntax has two behaviors.
const viaConstructorNoArgs: number[] = new Array();
const viaConstructorLength: number[] = new Array(3); // Specifies the length of the array.

console.log(viaConstructorNoArgs); // []
console.log(viaConstructorLength); // [ <3 empty items> ]

// 3) Array.of avoids constructor ambiguity.
const viaArrayOf = Array.of(3); // [3]
const viaArrayOfMany = Array.of(1, 2, 3); // [1, 2, 3]

console.log(viaArrayOf);
console.log(viaArrayOfMany);

// 4) Array.from can build from iterable and array-like values.
const fromString: string[] = Array.from("TS"); // ["T", "S"]
const fromSet: number[] = Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]
const withMapCallback: number[] = Array.from([1, 2, 3], (value) => value * 10);

console.log(fromString);
console.log(fromSet);
console.log(withMapCallback); // [10, 20, 30]

// 5) fill is useful for deterministic initialization.
const zeros: number[] = new Array(5).fill(0);
const labels: string[] = Array(3).fill("pending");

console.log(zeros); // [0, 0, 0, 0, 0]
console.log(labels); // ["pending", "pending", "pending"]

// TypeScript forms: number[], Array<number>, readonly arrays, and tuples.
const a: number[] = [10, 20];
const b: Array<number> = [30, 40];
const readonlyScores: readonly number[] = [100, 95, 90];
const point2D: [number, number] = [12, 24];

console.log(a, b, readonlyScores, point2D); // [10, 20] [30, 40] [100, 95, 90] [12, 24]
