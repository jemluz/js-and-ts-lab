// if (condition) {
  // ... do something ... execute this code
  // }

// Show me the best you can do!
if (true) {
  return true
} else {
  console.log('never mind')
}

// you can also represent an if-else structure in a single line, with a ternary operator
// (condition) ? instruction : oposite-instruction
true ? true : console.log('never mind')

// Switch Case
// The words 'switch', 'case', 'break' and 'default' are reserved
// switch (target)
//   case (value)
//       ... do something ... execute this code
//       break; (optional, will stop the rest of switch)
//   case (another-value)
//       ... do something ... execute this code
//       break; (optional, will stop the rest of switch)
//   default; (if there's no matching case)
//       ... do something ... execute this code
//       break;

var month = 9;
switch (month) {
  case 1:
    console.log('January')
    break;

  case 9:
    console.log('September')
    break;

  default:
    console.log('Not Jan, not Sep!')
    break;
}
