const displayTimer = document.querySelector(".display__time-left");
const displayEndTimer = document.querySelector(".display__end-time");
const input = document.getElementById('custom')


const buttons = document.querySelectorAll("[data-time]");
let countdown;

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    clearInterval(startTimer);
    let seconds = e.target.dataset.time;
    timer(seconds);
    
  });
}

input.addEventListener('keypress',(e)=>{
 
if( e.key === "Enter"){
  e.preventDefault()
  let val = input[0].value * 60
  clearInterval(countdown);
  timer(val);
  input[0].value = ""
}

})


function timer(seconds) {
  let minute = seconds < 60 ? 0 : seconds / 60;
  seconds = seconds < 60 ? seconds : 0;

  startTimer = setInterval(() => {
    if (minute>=0) {
      if (seconds == 0) {
        displayTimer.textContent = `${minute}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        seconds = 59;
        minute--;
        timeLeft(seconds,minute)
      } else {
        displayTimer.textContent = `${minute}:${
          seconds < 10 ? "0" : ""
        }${seconds}` ;
        seconds--;
        timeLeft(seconds,minute)
      }
    } 
  }, 1000);



}


function timeLeft (seconds,minute) {
  const currentDate = new Date()
  let hour = currentDate.getHours()
  let minutes = currentDate.getMinutes() + minute
  let second = currentDate.getSeconds() + seconds

  if (minutes>60){
    hour = hour + 1
    minutes = minutes - 60
    displayEndTimer.textContent = ` be back at ${hour} : ${minutes}`

  } else {
    displayEndTimer.textContent = ` be back at ${hour} : ${minutes}`

  }


  
}