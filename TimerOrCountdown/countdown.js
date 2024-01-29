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


// Changing date on the heading dynamically
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


// let futureDate = new Date(); // get date in simple format
// futureDate.setDate(futureDate.getDate() + 10); // add 10 days to current date
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
const year = futureDate.getFullYear(); // assign year value from date to the year var
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate(); 

let month = futureDate.getMonth();
month = months[month];

let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `give away ends on ${weekday}, ${date} ${month} 
    ${year} ${hours}:${minutes}am` // appending year in the giveaway heading

// Future time in millliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60mins
    // 1day = 24hrs

    // values in miliseconds
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set mu array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class=expired>This giveaway has expired</h4>`
    }
}

// countdown 
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();

