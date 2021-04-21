const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const day = document.querySelector(".day");
const sDiv = document.querySelector(".seconds");

const updateTime = function () {
  const date = new Date();
  const newYearDate = new Date("1 Jan 2022");
  const totalSeconds = Math.floor((newYearDate - date) / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  console.log(days);
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  console.log(hours);
  const minutes = Math.floor((totalSeconds / 60) % 24);
  console.log(minutes);
  const seconds = Math.round(totalSeconds % 60);
  console.log(seconds);

  if (seconds < 10) {
    sec.innerHTML = `0${seconds}`;
  } else {
    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    hour.innerHTML = hours;
    day.innerHTML = days;
  }
};

setInterval(updateTime, 1000);
