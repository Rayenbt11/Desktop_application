// creates a date object
const date = new Date();

// function to render the calendar
const renderCalendar = () => {
  date.setDate(1);

  // get HTML element ".days"
  const monthDays = document.querySelector(".days");

  // last day of the current month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
// last day of previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
// number of days in the next month to be shown on the current month's calendar
  const nextDays = 7 - lastDayIndex - 1;

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
//Update the HTML to show the current month and year
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

  let days = "";
// loop over the days for the previous months to show on the current month's calendar
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
//loop over the days of the current month
  for (let i = 1; i <= lastDay; i++) {
      days += `<div data-date="${i}">${i}</div>`;
  }
// loop over the days of the next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;
// today's date highlighted
  const today = new Date();
  if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    const todayElement = document.querySelector(`.days div[data-date='${today.getDate()}']`);
    todayElement.classList.add('today');
  }
};
// add listeners for both previous and next month buttons
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
// add listener to " today " button that will bring calendar's day to the actual date
document.querySelector(".today-btn").addEventListener("click", () => {
  date.setTime(new Date().getTime());
  renderCalendar();
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') { // Left arrow
    date.setMonth(date.getMonth() - 1);
  } else if (event.code === 'ArrowRight') { // Right arrow
    date.setMonth(date.getMonth() + 1);
  } else if (event.code === 'ArrowUp') { // Up arrow
    date.setFullYear(date.getFullYear() - 1);
  } else if (event.code === 'ArrowDown') { // Down arrow
    date.setFullYear(date.getFullYear() + 1);
  }
  renderCalendar();
});

renderCalendar();
