// Each variable type can be booleanized (verifyed/used as boolean) in JavaScript

// Type = how is it read by js

// undefined = false
// null = false
// Boolean = when value is true, is read as true, and when false is read as false

// Number =
// +0, -O or Nan is read as false
// any other value is read as true

// String = if lenght >= 1 is read as true, if empty (lenght = 0) is read as false

// Object = true

// There is a prank:
var newBoolean = new Boolean(false);
var newString = new String('');
var newNumber = new Number(NaN);
var newObject = {};

// These variables above are always read as true because they are OBJECTS
// object is always true!!