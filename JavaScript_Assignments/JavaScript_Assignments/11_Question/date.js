// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// year today
let current_year = new Date().getFullYear();
console.log("Current year is", current_year);

// month as a number
let current_month = new Date().getMonth();
console.log("Current month is", current_month+1);

// date today
let current_date = new Date().getDate();
console.log("Current date is", current_date);

// day as a number
let current_day = new Date().getDay();
console.log("Current day is", current_day);

// hours now
let current_hours = new Date().getHours();
console.log("Current hours are", current_hours);

// minutes now
let current_minutes = new Date().getMinutes();
console.log("Current minutes are", current_minutes);

// numbers of seconds elapsed from January 1, 1970 to now.
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let secondsUntilEndOfDate = (24*60*60) - (h*60*60) - (m*60) - s;
console.log("Seconds elapsed from January 1, 1970 to now", secondsUntilEndOfDate);