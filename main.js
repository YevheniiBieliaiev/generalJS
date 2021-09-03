"use strict";
// 1) 
console.log("First task:");

const student = {
  firstName: "",
  lastName: "",
  averageScore: 0,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  isGrantHolder() {
    return (this.averageScore >= 4);
  }
}

function Aspirant(firstName, lastName, disserStatus) {
  this.__proto__ = student;
  this.firstName = firstName;
  this.lastName = lastName;
  this.dissertationTopic;
  this.isDissertationComplete = diserStatus;
  this.isGrantHolder = function () {
    return (this.averageScore >= 4.5 && this.isDissertationComplete);
  }
}

const aspirant = new Aspirant("Jim", "Beam", false);

student.averageScore = 4.8
console.log(aspirant.getFullName());
console.log(student.isGrantHolder()); // true
console.log(aspirant.isGrantHolder()); // false


console.log(`All methods and properties of student:`)

for (let key in aspirant) {
  console.log(key);
}




// 2) 
console.log("Second task:");



class Plane {
  constructor(name, isFlying) {
    this.name = name;
    this.isFlying = isFlying;
  }
  takeOff() {
    return this.isFlying = true;
  };
  land() {
    return this.isFlying = false;
  };
}

const airport = {
  planes: [],
  getFlyingPlanes() {
    return this.planes.filter(item => item.isFlying);
  }
}


let plane1 = new Plane("First", true);
let plane2 = new Plane("Killer", false);
let plane3 = new Plane("Airbus", false);
let plane4 = new Plane("Boeing", false);

plane2.takeOff();
plane2.land();
plane3.takeOff();
plane4.takeOff();

airport.planes.push(plane1, plane2, plane3, plane4);

console.log(airport.getFlyingPlanes());