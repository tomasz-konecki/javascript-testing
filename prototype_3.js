/*

Creating our own Prototypal Inheritance Chains

*/

"use strict";

function Animal(voice) {
	this.voice = voice || "grunt...";
}

Animal.prototype.speak = function() {
	display(this.voice);
};

function Cat(name, color) {
	Animal.call(this, "meow..."); // !!!
	this.name = name;
	this.color = color;
}

Cat.prototype = Object.create(Animal.prototype); // !!!
Cat.prototype.constructor = Cat; // !!!

var fluffy = new Cat("Fluffy", "white");
fluffy.speak();

display(fluffy);
display(fluffy.__proto__); //Animal
display(fluffy.__proto__.__proto__); //speak()

/*
    !!! - important when creating prototype chain
    You need to implement these three concepts marked with '!!!'
    whenever building a prototype chain.
*/
