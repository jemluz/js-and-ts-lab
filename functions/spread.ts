// spread operator in addition to being used in rest params, could also be used to extract/spread/expand elemants from an array or object
// used when we don't want to specify each element

// array example
const a = [1, 2, 3];
const b = [...a, 4, 5];

console.log(b); // [1, 2, 3, 4, 5]


// object example
const user = { name: "Jemima", age: 28 };
const updated = { ...user, age: 29 };

console.log(updated); // will print { name: "Jemima", age: 29 }
