// These work at the bit level of numbers.
// They treat numbers as binary (32-bit integers in JavaScript).
// They do not short-circuit: all operands are evaluated.

// & = "And"
var bitOp = 5 & 3   // 0101 & 0011 = 0001 → 1

// | = "OR"
var anotherBitOp = 5 | 3   // 0101 | 0011 = 0111 → 7

// ~ = "Nagative"
var otherBitOp = ~5      // inverts all bits: 5 = 000...0101 → ~5 = 111...1010 = -6

// Exclusive OR (^)
// returns 1 if the bits are different, 0 if the same.
var xor = 5 ^ 3   // 0101 ^ 0011 = 0110 → 6

// Left shift (<<)
// Shifts all bits to the left by the given number.
// Each shift left = multiply by 2.
var left = 5 << 1   // 0101 → 1010 = 10
var otherLeft = 5 << 2   // 0101 → 10100 = 20

// Right shift (>>)
// Shifts all bits to the right by the given number.
// Each shift right = integer divide by 2.
// Keeps the sign bit (so negative numbers stay negative).
var right = 5 >> 1   // 0101 → 1010 = 10
var otherRight = 5 >> 2   // 0101 → 10100 = 20

// Unsigned right shift
// Similar to >>, but doesn’t keep the sign bit.
// Always fills with 0 on the left.
var unsigned = -20 >>> 1  // becomes a very large positive number

