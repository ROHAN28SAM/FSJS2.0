// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let current_date_time = new Date()
console.log(current_date_time);
let date_human_readable = new Date(Date.parse(current_date_time));
let date_readable = date_human_readable.toDateString();
console.log(date_readable);