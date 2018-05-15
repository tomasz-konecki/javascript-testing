//-------------------------------------------------

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function() {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

Plant.prototype.amIOrganic = function() {
  this.isOrganic ? console.log("I am organic.") : null;
};

//-------------------------------------------------

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor,
// thus inheriting all of Plant.prototype methods and properties
Fruit.prototype = new Plant();

var banana = new Fruit("Banana", "Yellow");

console.log(banana.name);
console.log(banana.showNameAndColor());
console.log(banana.amIOrganic());

//--------------------------------------------------

var myFriends = {
  name: "Pete",
  toString: function() {
    console.log(this.name);
  }
};
console.log(myFriends.name);
myFriends.toString();
