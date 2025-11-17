// With vanilla JS, we create classes with "constructor functions" (as the example below)
function Book(title, pages) {
  // Here we can use "private" word to declare private variables and functions (different from using prototype)
  this.title = title;
  this.pages = pages;

  // Class internal method creation: This method will available as one copy for each instance
  this.printPages = function() {
    console.log(this.pages)
  }
}

// creating a new instance of Book
var newBook = new Book('Tempest', 376);

// the . is a "access operator", with it we could access attributes and functions of an object
// assign new value for one property
newBook.pages = 303;

// Prototype method creation: This method will be shared between all instances, just only one copy for all
// Its better to save memory, but .prototype always will create variables and functions as "public"
Book.prototype.printTitle = function() {
  console.log(newBook.title);
}

Book.printTitle();