// before template literal we print custom messages like that
const myName = 'Natty'
console.log("My name is: "  + myName, "/n bye!")

// after template literals:
console.log(`My name is ${myName}`,
  "bye!"
)

// for use this, just replace the " "(quotation marks) by ` ` (crasis)
// and where you want to print a variable, use ${}

// also there is no need to use /n for line breaks, with template literals: just press Enter instead