// there is a fast way to declare functions inside objects
const someone = {
  name: 'Judith',
  sayHello() {
    console.log(`${this.name} said hello!`)
  }
}

// instead of
// var someone = {
//   name: 'Judith',
//   sayHello: function sayHello() {
//     console.log(`${this.name} said hello!`)
//   }
// }