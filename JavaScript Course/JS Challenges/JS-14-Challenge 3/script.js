// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

//& <===/ /===>
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/

//& <===/ /===>
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK �

//- Parent
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

//: Methods
Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${(this.speed += 10)} km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
};

Car.prototype.test = function () {
  console.log(`${this.make} has access to the parent method`);
};

/*
We want the prototype property of EV to inherit from the prototype property of Car -> Object.create, which will create a new object.
It will set EV.prototype to the new object, which has as a prototype Car.prototype.
*/

//- Linking Parent and Child
EV.prototype = Object.create(Car.prototype);
//: Fixing the wrong consutructor name
EV.prototype.constructor = EV;

//- Child
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

//: Methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(
    `Tesla going at ${(this.speed += 20)} km/h with a charge of ${(this.charge -= 1)}%`
  ); //: this.charge-- would work too
};

const tesla = new EV('Tesla', 120, 23);

const testCar = new Car('Tester', 420);

console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
