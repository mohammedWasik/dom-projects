const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear;
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() + 10,
  21,
  59,
  59
);
console.log(new Date().getDate() + 100);

let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on  ${weekday}, ${date} ${month}, ${year} ${hours}:${minutes} AM`;

const futureTime = futureDate.getTime(); //in ms

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry this giveaway has expired</h4>`;
  }
};
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
