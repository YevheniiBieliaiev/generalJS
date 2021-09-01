export default class University {
  #lowRateStudents = [];// для 1-ого варианта
  #highRateStudents = [];// для 1-ого варианта
  #generalArrOfStudents = [];//для 2-ого варианта
  constructor(universityName) {
    this.universityName = universityName;
  }

  addStudent(student) {
    //1 вариант
    // student.ratingPoint < 800 ? this.#lowRateStudents.push(student) : this.#highRateStudents.push(student);

    // this.#lowRateStudents.forEach(item => item.isSelfPayment = true)

    // this.#highRateStudents.sort(function (a, b) {
    //   let ratingA = a.ratingPoint + a.schoolPoint;
    //   let ratingB = b.ratingPoint + b.schoolPoint;
    //   return ratingB - ratingA
    // })

    // this.#highRateStudents.map((item, index) => {
    //   index <= 4 ? item.isSelfPayment = false : item.isSelfPayment = true;
    // })


    //2 вариант
    this.#generalArrOfStudents.push(student);

    this.#generalArrOfStudents.map((item) => item.isSelfPayment = true);

    let nonSelfPaymentCounter = 0;

    this.#generalArrOfStudents
      .sort(function (a, b) {
        let ratingA = a.ratingPoint + a.schoolPoint;
        let ratingB = b.ratingPoint + b.schoolPoint;
        return ratingB - ratingA
      })
      .map(item => {
        if (item.ratingPoint >= 800 && nonSelfPaymentCounter < 5) {
          nonSelfPaymentCounter++;
          item.isSelfPayment = false;
        }
      })


    //ЭТОТ скрипт не относится к вариантам решения. Это теор начало, для того чтоб упоротся ))) при одинаковых рейтингах
    //let arr = [1, 2, 3, 2, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6,];
    // arr.sort(function (a, b) {
    //   return b - a;
    // })
    // let repeatedElem = arr.reduce((acc, elem, index, array) => {
    //   if (!index || array[index - 1] !== elem) {
    //     acc.push([]);
    //   }
    //   acc[acc.length - 1].push(elem);
    //   return acc;
    // }, []).map(elem => elem.length === 1 ? elem[0] : elem)
  }

  getStudentInfo() {
    //для 1-ого варианта
    // this.#lowRateStudents.concat(this.#highRateStudents).forEach(student => {
    //   console.log(`University: ${this.universityName}\nName: ${student.name}\nSurname: ${student.surname}\nSelf-payment: ${student.isSelfPayment}`);
    // });

    //для 2-ого варианта
    // this.#generalArrOfStudents.forEach(student => {
    //   console.log(`University: ${this.universityName}\nName: ${student.name}\nSurname: ${student.surname}\nSelf-payment: ${student.isSelfPayment}`);
    // });
    //или (хотя log и в main норм записать. может, даже лучше)
    console.log(this.#generalArrOfStudents)
  }

  getNonSelfPaymentStudents() {
    //для 1-ого варианта
    // this.#highRateStudents.filter(student => {
    //   if (!(student.isSelfPayment)) {
    //     console.log(`University: ${this.universityName}\nName: ${student.name}\nSurname: ${student.surname}\nSelf-payment: ${student.isSelfPayment}`);
    //   }
    // });

    //для 2-ого варианта
    // this.#generalArrOfStudents.filter(student => {
    //   if (!(student.isSelfPayment)) {
    //     console.log(`University: ${this.universityName}\nName: ${student.name}\nSurname: ${student.surname}\nSelf-payment: ${student.isSelfPayment}`);
    //   }
    // });
    //или
    console.log(this.#generalArrOfStudents.filter(student => !(student.isSelfPayment)));
  }

  //методы на удаления после написания логики под одинакового рейтинга
  // getArrOfStudent() {
  //   return this.#generalArrOfStudents
  // }
  // getNewArr() {
  //   return this.#highRateStudents
  // }
}