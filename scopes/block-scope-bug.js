// Bugs are caused by var into block scopes statements because of scape
if (true) {
  var x = 10;
}

console.log(x); // 10 (x "escaped" the block!)
