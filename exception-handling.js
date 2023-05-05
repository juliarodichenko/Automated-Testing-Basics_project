// Task 1. In a try catch construction, wrap the code: console.log (a), let a = 3. 
// And display an error - ‘let must be declared’ before use. 
try {
    console.log (a);
    let a = 3;
} catch (err) {
    console.log ("'Let' must be declared before 'use'")
} finally {
    console.log ("Learn JS better! \n")
};

// Task 2. When running 1/0, the error 'cannot be divided by zero'
function calcDiv(digit1, digit2) {
    if (digit2 === 0) {
        throw new Error ("cannot be divided by zero")
    }
    return digit1 / digit2;
}
function showDiv(digit1, digit2) {
    try {
        const result = calcDiv(digit1, digit2);
        console.log (`${digit1} / ${digit2} = ${result}`);
    } catch(err) {
        console.log ("Error: " + err.message)
    }
}
showDiv(1,0);