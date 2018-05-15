// function PrintStuff(myDocuments) {
//   this.documents = myDocuments;
// }

// PrintStuff.prototype.print = function() {
//   console.log(this.documents);
// };

// var newObj = new PrintStuff("Text to be printed");

// newObj.print();
// console.log(PrintStuff.prototype);

// function foo() {
//   bar();
//   function bar() {
//     console.log("bar prototype:", bar.prototype);
//   }
// }
// console.log("foo prototype:", foo.prototype);

// foo();

// ----------------------------------------------------

// var myObj = new Object();

// console.log(myObj.constructor);

// function Account() {}
// var userAccount = new Account();

// console.log(userAccount.constructor);

// ----------------------------------------------------
// Writable/Enumerable/Configurable Attributes

"use strict";

var cat = {
  name: { first: "Fluffy", last: "LaBeouf" },
  color: "White"
};

//Writable

// Object.defineProperty(cat, "name", { writable: false });
// Object.freeze(cat.name);
// cat.name.first = "Scratchy";
// // console.log(Object.getOwnPropertyDescriptor(cat, "name"));
// console.log(cat.name);

//Enumerable

// Object.defineProperty(cat, "name", { enumerable: false });

// for (var propertyName in cat) {
//   console.log(propertyName + ": " + cat[propertyName]);
// }

// console.log(Object.keys(cat));
// console.log(JSON.stringify(cat));

// console.log(cat.name);

// getters & setters

Object.defineProperty(cat, "fullName", {
  get: function() {
    return this.name.first + " " + this.name.last;
  }
});

display(cat.fullName);
