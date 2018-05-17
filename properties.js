// Writable/Enumerable/Configurable Attributes

"use strict";

var cat = {
  name: { first: "Fluffy", last: "LaBeouf" },
  //   name: "Fluffy",
  color: "White"
};

//Writable

// Object.defineProperty(cat, "name", { writable: false });
// Object.freeze(cat.name);
// cat.name = "Scratchy";
// console.log(Object.getOwnPropertyDescriptor(cat, "name"));
// console.log(cat.name);

//Enumerable

// Object.defineProperty(cat, "name", { enumerable: false });

// 1. the chosen property doesn't show up in the 'for in' loop
// for (var propertyName in cat) {
//   console.log(propertyName + ": " + cat[propertyName]);
// }

// 2. the chosen property doesn't show up in the Object.keys

// Object.defineProperty(cat, "color", { enumerable: false });
// display(Object.keys(cat));

// 3. the chosen property affects JSON serialization (is not included)

// Object.defineProperty(cat, "color", { enumerable: false });
// display(JSON.stringify(cat));
// display(cat["color"]);
// console.log(cat.name);

// Configurable (if you've made a property inconfigurable, you can't make it configurable again)
// Object.defineProperty(cat, "name", { configurable: false });
// you CANNOT change 'enumerable' and 'configurable'
// Object.defineProperty(cat, "name", { enumerable: false });

// you CANNOT delete a property
// delete cat.name;

// you CAN change 'writable':
// Object.defineProperty(cat, "name", { writable: false });

// display(Object.keys(cat));
// cat.name = "Scratchy";

// getters & setters

Object.defineProperty(cat, "fullName", {
  get: function() {
    return this.name.first + " " + this.name.last;
  },
  set: function(value) {
    var nameParts = value.split(" ");
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

cat.fullName = "Muffin Top";

display(cat.fullName);
display(Object.getOwnPropertyDescriptor(cat, "name"));
