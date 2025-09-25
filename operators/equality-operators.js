// == (simple equal)
// is equal even if the types are different but value is similar.
// If x and y were from the same type, JavaScript use equals() to compare both values or objects, any combination not listed below will result false

// null == undefined -> true
// undefined == null -> true

// String == Number -> true ( if x == toNumber(y) )
// Number == String -> true ( if toNumber(x) == y )

// Boolean == Any -> true ( if toNumber(x) == y )
// Any == Boolean -> true ( if x == toNumber(y) )

// String or Number == Object -> ( if x == toPrimitive(y) )
// Object == String or Number -> ( if toPrimitive(x) == y )

// under the covers when you ask JS a simple ==, he will use toPrimitive() or toNumber() for decision
// As for the toPrimitive() and toNumber() methods, they both work respectively:

// receive -> result

// toPrimitive()
// -----------------------------
// Object ->
// if valueOf give an primitive value, will return that
// if toString give an primitive value, will return that
// else, an error will be returned

// toNumber()
// -----------------------------
// undefined -> NaN
// null -> +0
// Boolean -> true as 1, false as +0
// Number -> the value of the number itself

// === (equal strict)
// is equal only if the types and value are equal, if types are different, will be false
