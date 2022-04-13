 setInterval(function time(){

    const today = new Date;   
    const month = today.getMonth();
    const day = today.getDate();
    const year = today.getFullYear();
    const time = today.toTimeString();
    const displayedTime = time.slice(0,8)

//  insert time into ui
currentTime = document.querySelector('.time');
currentTime.innerText = displayedTime;

// insert month into ui
currentMonth = document.querySelector('.month')
currentMonth.innerText = month;

// insert date into ui
currentDay = document.querySelector('.day')
currentDay.innerText = day;

// insert year month into ui
currentYear = document.querySelector('.year')
currentYear.innerText = year;

}, 1000);

console.lo