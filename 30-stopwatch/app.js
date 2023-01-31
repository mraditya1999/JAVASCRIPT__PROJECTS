let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let cnt = document.getElementById("count");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;

  hour = 0;
  minute = 0;
  second = 0;
  count = 0;

  hr.innerHTML =  "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  cnt.innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    var hourString = hour;
    var minuteString = minute;
    var secondString = second;
    var countString = count;

    if (hour < 10) {
        hourString = "0" + hourString;
    }
    if (minute < 10) {
        minuteString = "0" + minuteString;
    }
    if (second < 10) {
      secondString = "0" + secondString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    
    hr.innerHTML = hourString;
    min.innerHTML = minuteString;
    sec.innerHTML = secondString;
    cnt.innerHTML = countString;
    setTimeout(stopwatch, 10);
  }
}
