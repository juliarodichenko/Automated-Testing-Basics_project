// Task 1. The car

let car = {
    color: 'black'
}
console.log(`expected result is "black", actual = ${car.color}`);

car.color = 'green';
console.log(`expected result is "green", actual = ${car["color"]}`);

car.power = function showPower() {
    console.log(`the engine power is 100`);
}
car.power();

// Task 2. The wharehouse

function calcSum(apples, pears) {
    return apples + pears;
}
console.log(`the number of accepted pears and apples is ${calcSum(3,4)}`);

// OR

const sum = (apples, pears) => apples + pears;
console.log(`the number of accepted pears and apples is ${sum(5,9)}`);


// Task 3. Names in a terminal
let terminalData = {names: 'Julia'}
terminalData.checkName = function (enteredName) {
if (terminalData.names === enteredName) {
    console.log(`Hello ${enteredName}`)
} else {
    console.log("There is no such name")
}
}
terminalData.checkName('Julia');
terminalData.checkName('Mikhail');

// Task 4. Argument

function checkType(argument) {
    return typeof argument
}
function showType (argument) {
    console.log(`the type of argument is ${checkType(argument)}`)
}
showType(true);
showType(23);
showType({});
showType('Hola');

// Task 5. Prime numbers
// According to Wikipedia, 1 - isn't prime number

function checkPrime(number) {
    if (number <= 1 || Number.isInteger(number) !== true || typeof number !== "number") {
        return false
    }
    const tryTo = number ** 0.5;
    let result;
    for(let a = 2; a <= tryTo; a++) {
    result = number % a
    if (result === 0) {
        return false
    } 
   } 
   return true;
};
console.log(`Is the number prime? ${checkPrime(7)}`);