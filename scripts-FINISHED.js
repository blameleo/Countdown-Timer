const displayTimer = document.querySelector(".display__time-left");
const displayEndTimer = document.querySelector(".display__end-time");

const buttons = document.querySelectorAll("[data-time]");
let countdown;

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    clearInterval(countdown);
    let seconds = e.target.dataset.time;
    timer(seconds);
  });
}

function timer(seconds) {
  let minute = seconds < 60 ? 0 : seconds / 60;
  seconds = seconds < 60 ? seconds : 0;

  countdown = setInterval(() => {
    if (minute>=0) {
      if (seconds == 0) {
        displayTimer.innerHTML = `<p>${minute}:${
          seconds < 10 ? "0" : ""
        }${seconds}</p>`;
        seconds = 59;
        minute--;
      } else {
        displayTimer.innerHTML = `<p>${minute}:${
          seconds < 10 ? "0" : ""
        }${seconds}</p>`;
        seconds--;
      }
    } else {

    }
  }, 1000);

// timeLeft(seconds)

}

// function timeLeft (seconds) {
//   const currentDate = new Date()
//   let hour = currentDate.getHours()
//   let minutes = currentDate.getMinutes()
//   let second = currentDate.getSeconds()


//   console.log(seconds);
// }

