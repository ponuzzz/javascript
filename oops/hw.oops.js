
class Vehicles {
    constructor(make) {
        this.make = make;
    }

    //method
    speak() {
        console.log(`${this.make} with car made`);

    }
}
//child class(inherit from animal)
class Car extends Vehicles {
    constructor(make, model, color, price) {
        super(make);  //parent invoking we used(call the parent class constructor)
        this.model = model;
        this.color = color;
        this.price = price;

    }
    //override speak method(polyformism)
    speak() {
        console.log(` the ${this.make}  car  is ${this.model}  with make, and its color is  ${this.color}  and it price ${this.price}`);

    }
}
const car = new Car("tyotta", "corolla", "blue", 200000);
car.speak();

//const car = new Car("Hyundai", "corolla"); // instance of
//Car.speak();
