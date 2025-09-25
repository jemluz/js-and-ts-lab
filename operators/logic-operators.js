var number = 1;

// && And
console.log(number == 1 && typeof number == "number"); // true
console.log(number == 1 && typeof number == "boolean"); // true

// with Short-circuit behavior
// Returns the FIRST FALSY value or the LAST TRUTHY value.
console.log(false && typeof number == "number"); // false
console.log(true && typeof number == 1); // true


// || Or
// Also has the Short-circuit behavior 
// Returns the FIRST TRUTHY value or the LAST FALSY value.
console.log(number == 1 || typeof number == "string"); // true
console.log(number == 2 || typeof number == "string"); // false

// usefull to default values
var name;
var displayName = name || "Guest";
console.log(displayName); // "Guest"


// ! NOT / Negation / Denial
let isHappy = true;

console.log(!isHappy); // false

// !! Double NOT = converts to boolean
console.log(!!isHappy); // true
