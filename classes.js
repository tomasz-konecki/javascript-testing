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

var car = new Car("Fiat", "red", "2015");

car.printInfo();

console.log(car);
