function id() {
  let id = 0;
  return function () {
    return ++id;
  }
}
let studentID = id();

export {
  studentID
}