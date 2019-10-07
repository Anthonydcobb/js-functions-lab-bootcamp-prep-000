// write your code below!
let happyHolidays = () => {return "Happy holidays!"};

let happyHolidaysTo = (name) => {return `Happy holidays, ${name}`};

let happyHolidayTo = (holiday, name) => {return `Happy ${holiday}, ${name}`};

let holidayCountdown = (holiday, days) => {return `It's ${days} days unitl ${holiday}!`};


console.log(happyHolidays());
console.log(happyHolidaysTo("Sam"));
console.log(happyHolidayTo("Festivus", "Bob"));
console.log(holidayCountdown("Festivus", 20));