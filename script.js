const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");
const month = document.getElementById("month");
const title = document.querySelector(".title");
const timerContainer = document.querySelector(".timer__container");
const showMessage = document.querySelector(".showMessage");
const secondContainer = document.querySelector(".second__container");
const newYearDate = new Date("December 31, 2023 23:59:59").getTime();

function countDown() {
  const currentDate = new Date().getTime();
  const timeBetween = newYearDate - currentDate;
  const daysBetween = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  const months = Math.floor(daysBetween / 30.436875); // Approximate average number of days in a month
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeBetween / (1000 * 60 * 60));
  const minutes = Math.floor(timeBetween / (1000 * 60));
  const seconds = Math.floor(timeBetween / 1000);
  month.innerText = months;
  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  if (timeBetween === 0) {
    clearInterval(unsubscribed);
    timerContainer.remove();
    secondContainer.remove();
    showMessage.style.display = "inline-block";
    title.innerText = `Happy New Year! 
                        Welcome 2024`;
    console.log(`Dear everyone,

As we bid farewell to another remarkable year, we stand at the threshold of a brand new chapter filled with endless possibilities and opportunities. On this joyous occasion, we extend our warmest wishes for a happy and prosperous New Year 2024!

May the coming year be a time of growth, inspiration, and achievement for each and every one of you. May it bring you abundant happiness, good health, and success in all your endeavors. May your dreams take flight, and may you find fulfillment in pursuing your passions.

Let us embrace the New Year with open hearts and open minds, ready to embrace new challenges and embrace the beauty of change. May we continue to support and uplift one another, fostering a spirit of unity and compassion in our communities.

May 2024 be a year of love, kindness, and understanding. Let us treasure our relationships, cherish the precious moments, and create lasting memories. Together, let us strive for a brighter future, where harmony and peace prevail.

Cheers to a sensational year ahead!

Warm regards,
Kei-K`);
  }
}

const unsubscribed = setInterval(countDown, 1000);
