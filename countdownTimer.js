"use strict";
//1)
let getTime = (function () {
  let startTime = Date.parse(new Date());
  return function () {
    let dateInMoment = Date.parse(new Date());
    if (!(dateInMoment - startTime)) {
      console.log(`Enabled`);
    }
    return `${(dateInMoment - startTime) / 1000} seconds have passed`;
  };
})();

getTime();


//2)
const TIMER = time => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  function countdownTimer() {
    let showMin = minutes < 10 ? `0${minutes}` : minutes;
    let showSec = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`${showMin} : ${showSec}`);

    if (minutes > 0 && seconds === 0) {
      minutes--;
      seconds = 60;
    }

    seconds--;

    if (--time === 0) {
      console.log(`Time End`);
      clearInterval(timerID);
    }
  }
  let timerID = setInterval(countdownTimer, 1000);
}

TIMER(5);