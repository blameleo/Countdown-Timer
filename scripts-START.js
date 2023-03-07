const displayTimer = document.querySelector(".display__time-left");
const displayEndTimer = document.querySelector(".display__end-time");
const input = document.getElementById("custom");
const buttons = document.querySelectorAll(".timer__button");
let startTimer;

for (let button of buttons) {
       button.addEventListener("click", (e) => {
       clearInterval(startTimer);
       let seconds = e.target.dataset.time;
       countDownTime(seconds);
  });
}

function countDownTime(time) {
  const current = Date.now();
  const then = current + time * 1000;
  startTimer = setInterval(() => {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      displayTimer.textContent = `${minutes}: ${seconds}`;
      displayEndTime(then);
        if (minutes <= 0 && seconds <= 0) {
             clearInterval(startTimer);
        } else {
            time--;
      };
       
  }, 1000);
}
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
      let val = input[0].value * 60;
      console.log(val);
    clearInterval(startTimer);
    countDownTime(val);
    input[0].value = "";
  }
});

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 +"pm" : hour;
    const minutes = end.getMinutes();
    displayEndTimer.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}