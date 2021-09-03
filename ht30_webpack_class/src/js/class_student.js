function id() {
  let id = 0;
  return function () {
    return ++id;
  }
}
let studentID = id();

export default class Student {
  constructor({ name, surname, ratingPoint, schoolPoint }) {
    this.id = studentID();
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
  }
}