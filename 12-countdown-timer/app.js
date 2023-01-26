const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = deadline.querySelectorAll('.deadline-format h4');
// console.log(items);

// add 3 days into current date so counter will always work when we open it
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 3, 12, 0, 0);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hrs

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate all values
  let days = Math.floor(time / oneDay);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) return (item = `0${item}`);
    else return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry thid giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
