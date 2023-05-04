// Task 1. Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb 
// by pattern: letter 'a', any character, letter 'b'

const str = 'ahb acb aeb aeeb adcb axeb';
const result = str.match(/a.b/gi);
console.log(`expecting result = "ahb, acb, aeb", actual = ${result}`);

// Task 2. Given the string '2 + 3 223 2223'. 
// Write a regex that finds line 2 + 3 without capturing the rest

const str2 = '2 + 3 223 2223';
const result2 = str2.match(/2 \+ 3/g); // OR /\d\s\+\s\d/
console.log(`expecting result = "2 + 3", actual = ${result2}`);

// Task 3. Get the day, month and year of the current date and output it to the console separately

const date = new Date();
console.log(`The current day is ${date.getDate()}`);
switch(date.getMonth()){
    case 0: console.log(`The month is January. Happy new Year!`);
    break;
    case 1: console.log(`The month is February. Happy Valentine's day!`);
    break;
    case 2: console.log(`The month is March. Happy St Patrick's day!`);
    break;
    case 3: console.log(`The month is April. Happy Easter!`);
    break;
    case 4: console.log(`The month is May. Happy lost sock memorial day!`);
    break;
    case 5: console.log(`The month is June. Happy summer solstice day!`);
    break;
    case 6: console.log(`The month is July. Happy cheesecake day!`);
    break;
    case 7: console.log(`The month is August. Happy my birthday day`);
    break;
    case 8: console.log(`The month is September. Happy international day of peace`);
    break;
    case 9: console.log(`The month is October. Happy Haloween! Bu`);
    break;
    case 10: console.log(`The month is November. The winter is coming`);
    break;
    default: console.log(`The month is December. Merry Christmas`)
};
console.log(`The current year is ${date.getFullYear()}`);