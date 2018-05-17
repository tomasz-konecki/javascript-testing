"use strict";

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 4;

// Cat.prototype = { age: 5 };

var fluffy = new Cat("Fluffy", "White");
var muffin = new Cat("Muffin", "Brown");

// fluffy.age = 6;

display(fluffy.age);
display(fluffy.__proto__.age);

display(Object.keys(fluffy));

display(fluffy.hasOwnProperty("age"));

/* 

When we ask for a property value, JS looks at an object to see if it has 
a value for that property name. If not, it asks its prototype.
Instance properties override the prototype properties.

*/

display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);
display(fluffy.__proto__.__proto__.__proto__); //null

/*

Eventually, as you walk up the prototype chain, you'll always find a null prototype.
This is ususally after hitting Object's prototype. By default, all abjects in JS inherit from Object.
Object's prototype is null (it has NO prototype).

*/
