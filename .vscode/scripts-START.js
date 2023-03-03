var countDownDate = new Date ("March 30, 2024 20:37:25").getTime;
var x = setInterval(function() {var now = new Date().getTime();
var distance = countDownDate - now;
var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days + minutes + "m " + seconds + "s ";
if (distance < 0) {clearInterval(x);

document.getElementById("demo").innerHTML = "EXPIRED";
}

}
)