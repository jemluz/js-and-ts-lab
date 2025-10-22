// let is the new "var" word, the let variable could be changed
let someNumber = 4;
someNumber = 7;

// in the vanilla JS we could declare a variable with the same name many times:
var framework = 'angular'
var framework = 'react'
console.log(framework)

// in TS will return an error
// let framework = 'angular'

// const can't be changed, its a constant value, its just readable
const someLetter = 'l'

// if you try to overwrite, will return an error
// someLetter = 'b'

// but this will work
const someObj = {
  name: 'carlos'
}
someObj.name = 'carlinhos'

// why?
// the variable itself reference (the memory adress where the const is placed) can't be changed:
// const someObj = {}
// but the properties of can