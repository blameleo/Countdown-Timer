let displayTime = document.querySelector(".display__time-left"); // Display time 
// getting buttons !
let buttons = document.querySelectorAll(".timer__button");
console.log(buttons); // consoling node lists of buttons
const startingTime = 0.34; // getting 20 seconds as starting time 
let time = startingTime * 60; // getting my seconds in millseconds
const countDownTimer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    displayTime.textContent = `0${minutes}: ${seconds}`;
    time--
     if (seconds<= 0) {
        clearInterval(countDownTimer);
    }
}, 1000);