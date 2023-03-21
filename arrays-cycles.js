// 1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movieArray = ['Hasta el cielo', 'Sombra Hueso', 'Entrevias', 'El principe'];
movieArray.forEach(name => console.log(name));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array

const carArray = ['Skoda', 'Ford', 'Seat', 'Toyota'];
const carString = carArray.join(', ');
console.log(`${carString} is ${typeof carString}`);
const carArrayNew = carString.split(', ');
console.log(`${carArrayNew} is ${typeof carArrayNew}. Is it Array? - ${Array.isArray(carArrayNew)}`);

// 3. Given an array of the names of your friends, add the words hello to each element of the array
// Creating new array
const names = ['Julia', 'Mikhail', 'Oso', 'Lupa'];
const namesHello = names.map(name => 'Hello ' + name);
console.log(namesHello);

// Using the same array

for (let w = 0; w <= names.length - 1; w++) {
    names[w] = 'Hello ' + names[w]
}
console.log(names);

// 4. Convert numeric array to Boolean
const numArray = [1, 0, 0, 23];
const boolArray = numArray.map(number => Boolean(number));
console.log(boolArray);

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1,6,7,8,3,4,5,6];
arr.sort((a,b) => b - a);
console.log(arr);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3

const arr2 = [1,6,7,8,3,4,5,6];
const newArr = arr2.filter(number => number > 3);
console.log(newArr);

// 7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function showIndex(arrEnt, num) {
    let z = arrEnt.indexOf(num,0);
    if (z == -1) {console.log(`There is no ${num} in array`)};
    while (z !== -1) {
        console.log(`the index of an array element equal to a number is ${z}`)
        z = arrEnt.indexOf(num,z + 1)
    }
}
showIndex([1,4,3,5,4,9,4,8], 4)

// 8. Implement a loop that will print the number 'a' until it is less than 10
// I don't understand what exactly needed from this program. So I print the number from "a" to 10

let a = 5;
for (a; a < 10; a++) {
    console.log(a);
};

// 9. Implement a loop that prints prime numbers to the console
// I don't understand what exactly needed from this program. So I print prime numberes from 'st' to 'sp'
// This task is done with Label (that was expained in self-study materials), but I undersatsnd hat it's not a good practice. So I have 2nd version

let st = 2;
const sp = 4;
if (st < 2) {console.log('Enter number more than 1')}
else {
notPrime: for (st; st <= sp; st++) {
    for (let p = 2; p <= st**0.5; p++) {
        let result = st % p;
        if (result === 0) {continue notPrime}
    }
    console.log(`${st} is prime number`)
}
}

// 2nd version of task 9

let st2 = -1;
const sp2 = 27;
function checkPrime(num) {
    if (num <= 1) {return false}
    for (let p = 2; p <= num**0.5; p++) {
    let result = num % p;
    if (result === 0) {return false}
    } 
    return true;
}
for (st2; st2 <= sp2; st2++) {
    if (checkPrime(st2)) {
        console.log(`prime number - ${st2}`)
    }
}

// 10. Implement a loop that prints odd numbers to the console
// I print odd numberes from 'start' to 'finish'

let start = 2;
const finish = 10;
for (start; start <= finish; start++) {
    if (start%2 !== 0) {
    console.log(`${start} is odd number`)
    } 
};