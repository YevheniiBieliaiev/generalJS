"use strict";
// 1) 
console.log("First task:");

const student = {
  firstName: "Jim",
  lastName: "Beam",
  averageScore: 0,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  isGrantHolder() {
    return (this.averageScore >= 4);
  }
}

function Aspirant() {
  this.__proto__ = student;
  this.dissertationTopic;
  this.isDissertationComplete;
  this.isGrantHolder = function () {
    return (this.averageScore >= 4.5 && this.isDissertationComplete);
  }
}

const aspirant = new Aspirant();

student.averageScore = 4.8
console.log(student.isGrantHolder()); // true
aspirant.isDissertationComplete = false;
console.log(aspirant.isGrantHolder()); // false


console.log(`All methods and properties of student:`)

for (let key in aspirant) {
  console.log(key);
}




// 2) 
console.log("Second task:");

class Plane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
    this.takeOff = function () {
      return this.isFlying = true;
    }
    this.land = function () {
      if (this.isFlying) {
        return this.isFlying = false;
      }
    }
  }
}

const airport = {
  planes: [],
  getFlyingPlanes() {
    return this.planes.filter(item => item.isFlying === true);
  }
}


let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
let plane3 = new Plane("Airbus");
let plane4 = new Plane("Boeing");

plane2.takeOff();
plane2.land();
plane3.takeOff();
plane4.takeOff();

airport.planes.push(plane1, plane2, plane3, plane4);

console.log(airport.getFlyingPlanes());