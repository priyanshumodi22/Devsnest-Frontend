window.addEventListener('DOMContentLoaded', (event) => {
const deg = 6;
let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");
setInterval(() => {
  const day = new Date();
  const hh = day.getHours();
  const mm = day.getMinutes();
  const ss = day.getSeconds();
  const secondsFraction = ss / 60;
  const minutesFraction = (secondsFraction + mm) / 60;
  const hoursFraction = (minutesFraction + hh) / 12;

  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  hr.style.transform = `rotate(${hoursRotate}deg)`;
  mn.style.transform = `rotate(${minutesRotate}deg)`;
  sc.style.transform = `rotate(${secondsRotate}deg)`;
})
});


