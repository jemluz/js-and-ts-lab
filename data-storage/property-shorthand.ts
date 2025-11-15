// following the logic behind array destructuring...
// we can write properties in a faster way

let [username, account] = ['Lucian', 4332];
let userInfo = { username, account }
console.log(userInfo) // will print { username: 'Lucian', account: 4332 }

// instead of
// let userInfo = { username: username, account: account }