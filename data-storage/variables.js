// PRIMITIVE DATA

// you should not use float type to represent money!
var number = 1; // integer
var grade = 7.6; // float

var name = 'satoshi'; // string (used to store text)
var hasError = false; // boolean (used to store true or false)

// null mean lack of value (defined as empty), while undefined mean without value yet (undefined yet)
// if you declare a variable and not attribute any value for (line 14), it will be a undefined variable
// null == undefined => true (strict comparision)
// null === undefined => false
var nullVar = null;
var und;

// Symbols could be string, number or boolean
// Are used for:
// 1) protect property from overwrite
// 2) hide on enumeration (for passwords for example)
var ID1 = Symbol("id");