// at 2009, node js was created and js was used outside the browser
// commonjs pattern was created to allow js modules be used in server side

// Advantages of CommonJS Pattern
// 1. Synchronous loading of modules
// 2. Simple and easy to understand syntax
// 3. Wide adoption in the Node.js ecosystem
// 4. True isolation

// Disadvantages of CommonJS Pattern
// 1. Not suitable for browser environments without bundlers
// 2. Synchronous (bad for browser)
// 3. Did not become the official standard of the language.


// math.js
module.exports = function sum(a, b) {
  return a + b;
};


// index.js
const sum = require('./math');
