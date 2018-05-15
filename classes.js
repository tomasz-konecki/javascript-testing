class Car {
  constructor(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;

    this.printInfo = function() {
      console.log(this.brand, this.color, this.year);
    };
  }
}

var car = new Car("Ford", "red", "2015");

car.printInfo();

// console.log(car);

console.log(Car.prototype);
