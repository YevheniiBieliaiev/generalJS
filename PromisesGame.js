"use strict";

//1) 

let min = 1,
    max = 6,
    delay = 2000;


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (min <= number && number <= max - 1) {
      resolve(number);
      console.log(`Start the game...`);
    } else if (number === max) {
      reject(`Exit`);
    }
  }, delay)
})
  .then((number) => {
    if (number === min) {
      console.log(`Stay here`);
    } else if (number >= min + 1) {
      console.log(`Go ${number} steps`);
    }
  })
  .catch((error) => console.log(error));