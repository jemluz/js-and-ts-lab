// Static analysis = the process of analyzing code to understand without executing it
// The more explicit and fixed the code, the better the static analysis!

// Tools that does that
// 1. TypeScript Compiler
// 2. ESLint
// 3. Babel
// 4. IDE Features (like IntelliSense in VSCode)

// They read the code and try to answer:

// What does this file export?
// What does it import?
// What is used?
// What is never used? (tree shaking removes unused code)
// Is there any syntax error?
// What type is this?
// Are there any type errors?

// Benefits of Static Analysis
// 1. Early error detection
// 2. Code quality enforcement
// 3. Improved code readability and maintainability
// 4. Better refactoring support
// 5. Enhanced developer productivity

// Worse static analysis:

// CommonJS dynamic require example
const moduleName = getName();
const mod = require(moduleName);

// Problem is:

// The module name is only known at runtime
// Tools cannot determine:
// - which file will be imported
// - what it exports
// - if something is used or not

// Another example
const math = require('./math');
math[method](2, 3);

// Impossible to know:
// Which function will be called/imported

// Best static analysis:
// ESM static import example
import { sum } from './math.js';
const result = sum(2, 3);

// Everything is explicit:
// - File known
// - Export name known
// - Usage known
// - Order known
// - Tools can analyze and understand the code better