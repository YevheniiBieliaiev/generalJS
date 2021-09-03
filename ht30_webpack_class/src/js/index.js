"use strict";
import Student from "./class_student";
import University from "./class_university";
import { ENROLLEES_ARR } from "./studentsArr";

function main() {

  const UNIVERSITY = new University("Kharkiv National University of Economics");

  ENROLLEES_ARR.forEach(item => UNIVERSITY.addStudent(new Student(item)));

  console.log(UNIVERSITY.getStudentInfo());
  console.log(UNIVERSITY.getNonSelfPaymentStudents());


  //console.log(UNIVERSITY.getArrOfStudent()); 
  //console.log(UNIVERSITY.getNewArr());
}

main()