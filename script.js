const weekDayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const calendarMonthElem = document.querySelector('.calendar-month');
const calendarDayElem = document.querySelector('.calendar-day');
const calendarDateElem = document.querySelector('.calendar-date');
const calendarYearElem = document.querySelector('.calendar-year');

const dateObject = new Date();

const year = dateObject.getFullYear();
const month = dateObject.getMonth();
const day = dateObject.getDay();
const date = dateObject.getDate();

calendarMonthElem.innerText = `${monthArray[month]}`;
calendarDayElem.innerText = `${weekDayArray[day]}`;
calendarDateElem.innerText = `${date}`;
calendarYearElem.innerText = `${year}`;