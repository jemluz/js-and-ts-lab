// Function scope
// When a variable is declared inside a function, this mean it only accessible inside that function.

// var variables work well as function scoped, but not as block scoped
function test() {
  var x = 10; // function scope
  console.log(x); // is visible and accessible
}

test();
// console.log(x); // error, x not defined


