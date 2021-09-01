"use strict";
import Student from "./class_student";
import University from "./class_university";

function main() {
  const ENROLLEES_ARR = [{
    name: "ASCHF (FOMA)",
    surname: "LSTSHFUM (KINAIEV)",
    ratingPoint: 1000,
    schoolPoint: 1000
  },
  {
    name: "ALEXEI",
    surname: "ZAYSEN",
    ratingPoint: 880,
    schoolPoint: 700
  },
  {
    name: "KSENIIA",
    surname: "ONATOPP",
    ratingPoint: 1430,
    schoolPoint: 1200
  },
  {
    name: "IVAN",
    surname: "DANKO",
    ratingPoint: 1430,
    schoolPoint: 1200
  },
  {
    name: "VIGGO",
    surname: "TARASOV",
    ratingPoint: 1000,
    schoolPoint: 990
  },
  {
    name: "VIKTOR (GULNARA)",
    surname: "NAVORSKY (GULINA)",
    ratingPoint: 650,
    schoolPoint: 500
  },
  {
    name: "IRINA",
    surname: "SPALKO",
    ratingPoint: 990,
    schoolPoint: 1100
  },
  {
    name: "ZEY",
    surname: "CHELOVEK",
    ratingPoint: 570,
    schoolPoint: 1300
  },
  {
    name: "PAVEL",
    surname: "CHEHOV",
    ratingPoint: 1090,
    schoolPoint: 1010
  },
  {
    name: "BORIS",
    surname: "BRITVA",
    ratingPoint: 870,
    schoolPoint: 790
  },
  {
    name: "LEV",
    surname: "ANDROPOV",
    ratingPoint: 1560,
    schoolPoint: 200
  }];

  const UNIVERSITY = new University("Kharkiv National University of Economics");

  ENROLLEES_ARR.forEach(item => UNIVERSITY.addStudent(new Student(item)));

  UNIVERSITY.getStudentInfo();
  UNIVERSITY.getNonSelfPaymentStudents();


  //console.log(UNIVERSITY.getArrOfStudent()); 
  //console.log(UNIVERSITY.getNewArr());
}

main()