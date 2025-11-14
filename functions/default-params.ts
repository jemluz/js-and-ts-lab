// You can use assignment operator insite params definition, to setup default values for them
function sum(x = 1, y = 2, z = 3) {
  // functions have arguments as an embedded object by default
  // this object is an array
  // console.log(arguments.length)
  return x + y + z;
}
console.log(sum(4,3)) // print 9

// in vanilla JS, we need to do this
// function sumVanilla(x, y, z) {
//   if( x === undefined) x = 1;
//   if( z === undefined) z = 1;
//   if( y === undefined) y = 1;
// }