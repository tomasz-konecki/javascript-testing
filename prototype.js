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

"use strict";

var arr = ["red", "blue", "green"];

Object.defineProperty(Array.prototype, "last", {
  get: function() {
    return this[this.length - 1];
  },
  set: function(val) {
    this.push(val);
  }
});

arr.last = "yellow";
var last = arr.last;
display(last);

var arr2 = ["one", "two", "three"];
arr2.last = "four";
display(arr2.last);

display(Array);

// -----------------------------------------------------------------------------------------------

display("----------------------------------");

// var myFunc = function() {};
// display(myFunc.prototype); // empty object

// var cat = { name: "Fluffy" };
// display(cat.prototype); // undefined
// display(cat.__proto__);

/*
NOTE: Prototype is an object that exists on EVERY FUNCTION in JS.
      It's just an empty object.
      Objects, however, do not have a prototype property. They have a __proto__ property.
      So an object really does have a prototype assigned to it.
      But an object's prototype and a function's prototype are used differently.

      FUNCTION'S PROTOTYPE is the object instance that will become the prototype for all
      objects created using this function as a constructor.

      OBJECT'S PROTOTYPE is the object instance from which the object is inherited.

      A prototype is not like a class, it is actually an OBJECT.
      So when a f-n is created, it gets a prototype object created and attached to it behind the scenes.
      If that f-n is then used as a constructor function with the 'new' keyword, the object that is
      created has a __proto__ property that is POINTING TO THE SAME OBJECT that is the function's
      prototype. See example below:
*/

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat("Fluffy", "White");

Cat.prototype.age = 3;

display(Cat.prototype);
display(fluffy.__proto__);

/* 
    Both Cat.prototype and fluffy.__proto__ have the same shape. However, they're not just 
    the same shape. They're pointing to the exact same instance of an object.
    They are the same instance, they're equal. See below:
*/

display(Cat.prototype === fluffy.__proto__); // true

var muffin = new Cat("Muffin", "Brown");

display(muffin.__proto__);
