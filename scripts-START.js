let displayTime = document.querySelector(".display__time-left"); // Display time 
// getting buttons !
let buttons = document.querySelectorAll(".timer__button");
console.log(buttons); // consoling node lists of buttons

const startingTime = 0.34; // getting 20 seconds as starting time
let time = startingTime * 60; // getting my seconds in millseconds

function countDownTime20sec() {
    const countDownTimer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayTime.textContent = `${minutes}: ${seconds}`;
        time--
        if (seconds <= 0) {
            clearInterval(countDownTimer);
            time = startingTime * 60;
        }
    }, 1000);
};
// 5 mins timer
const startingTime2 = 5; // getting 5  mins as starting time 
let time2 = startingTime2 * 60; // getting my minutes in seconds
function countDownTime5mins() {
const countDownTimer2 = setInterval(() => {
    let minutes = Math.floor(time2 / 60);
    let seconds = Math.floor(time2 % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    displayTime.textContent = `${minutes}: ${seconds}`;
    time2--
     if (minutes<= 0 && seconds <=0) {
         clearInterval(countDownTimer2);
         time2 = startingTime2 * 60;
    }
}, 1000)
};

