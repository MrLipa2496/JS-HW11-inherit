// Ex1

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }
  getAge() {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - this.manufactureDate.getFullYear();
    const month = currentDate.getMonth() - this.manufactureDate.getMonth();
    const day = currentDate.getDay() - this.manufactureDate.getDay();

    if (month < 0 || (month === 0 && day < 0)) {
      return age - 1;
    }
    return age;
  }

  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${
      this.model
    }, Age: ${this.getAge()} years`;
  }
}

const vehicle1 = new Vehicle(
  { length: 4.5, width: 1.8, height: 1.4 },
  "Toyota",
  "Corolla",
  "2017-05-11"
);

console.log(vehicle1.getAge());
console.log(vehicle1.getFullInfo());

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
      return true;
    }
    return false;
  }
  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${
      this.model
    }, Age: ${this.getAge()} years, Maximum number of passengers: ${
      this.passengerLimit
    }`;
  }
}

const bus1 = new PassengerTransport(
  { length: 12, width: 2.5, height: 3.5 },
  "Mercedes",
  "Sprinter",
  "2018-03-25",
  20,
  19
);

console.log(bus1.getFullInfo());
console.log(bus1.addPassenger());
console.log(bus1.addPassenger());

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }
  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${
      this.model
    }, Age: ${this.getAge()} years, Capacity: ${this.capacity}`;
  }
}

const truck = new FreightTransport(
  { length: 10, width: 2.5, height: 3 },
  "Volvo",
  "FH16",
  "2019-07-14",
  25000
);

console.log(truck.getFullInfo());

console.log(truck.checkLoadingPossibility(20000));
console.log(truck.checkLoadingPossibility(30000));
