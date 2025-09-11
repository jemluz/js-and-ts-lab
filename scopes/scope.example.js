var scope = 'global';
anotherScope = 'global';

function createLocalScope() {
  var localScope = 'local';
  return localScope;
}

function changeAnotherScope() {
  anotherScope = 'local';
  return anotherScope;
}

console.log(scope); // will return 'global'
console.log(createLocalScope()); // will return 'local'
console.log(anotherScope); // will return 'global'
console.log(changeAnotherScope()); // will return 'local'
console.log(anotherScope); // will return 'local' bcs was changed by line 17;
