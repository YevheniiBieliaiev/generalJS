"use strict";
//1)
function pauseCounter() {
  let startTime = Date.parse(new Date());
  return function () {
    let diffTime = Date.parse(new Date());
    startTime = diffTime - startTime;
    if (!(startTime)) {
      console.log(`Enabled`);
      startTime = diffTime;
    } else {
      console.log(`${startTime / 1000} seconds have passed`);
      startTime = diffTime;
    }
  }
}

let getTime = pauseCounter();
setTimeout(() => getTime());
setTimeout(() => getTime(), 2000);
setTimeout(() => getTime(), 5000);


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
//TIMER(120);
//TIMER(65);
//TIMER(5);
