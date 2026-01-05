// AMD = Asynchronous Module Definition

// how it was before AMD/RequireJS

// 2009–2012
// - JavaScript only in the browser
// - No native module system
// - Many JS files
// - Slow network
// - Blocking script
// - Critical load order

// Problems:
// - If you get the order wrong, your app breaks
// - Everything is global
// - Hard to scale
// - Hard to maintain

// Solution: AMD/RequireJS
// - Define modules and their dependencies
// - Load modules asynchronously
// - Manage load order automatically

// Difference from CommonJS (CJS):
// - AMD is asynchronous, CJS is synchronous
// - AMD is for browsers, CJS is for server (Node.js)

// RequireJS is the most popular AMD implementation
// It does the same of bundlers does nowadays, but at runtime in the browser

// Example of AMD/RequireJS module definition and usage:
// math.js
define([], function () {
  function sum(a, b) {
    return a + b;
  }

  return {
    sum
  };
});

// module with dependencies
define(['./math'], function (math) {
  math.sum(1, 2);
});

// Using RequireJS to load modules
require(['math', 'user'], function (math, user) {
  math.sum(1, 2);
});
// Callback runs when both modules are loaded
// Scripts are loaded asynchronously


// Have you ever used jquery ??? uhh?
// Is this is familiar to you?
define(['jquery'], function ($) {
  $('#app').hide();
});

// Disadvantages of AMD/RequireJS:
// - More complex syntax
// - Harder to read and write
// - Callback hell (many nested functions "define")
// - Worse static analysis
// - Performance issues (multiple HTTP requests, modules logic runs on browser)
// - Nowadays, bundlers and native ESM are preferred

// Comparing with ES Modules (ESM):

// You need to do a course to understand AMD/RequireJS
define(['a', 'b', 'c'], function (a, b, c) {
  // ...
});

import { a, b, c } from './deps';
// ESM is more concise and easier to read

// | AMD                    | ES Modules             |
// | ---------------------- | ---------------------- |
// | Runtime                | Build-time             |
// | Callback               | Sintaxe declarativa    |
// | Browser only           | Browser + Node         |
// | Verboso                | Simples                |
// | Análise estática fraca | Análise estática forte |
// | Sem tree-shaking real  | Tree-shaking nativo    |

// "AMD solved the problem of browser modules before ES Modules, using asynchronous runtime loading, but lost ground due to verbosity and lack of static analysis."
