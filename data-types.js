const a = '5';
const b = 20;
const c = true;

// string + boolean
const result1 = a + c;
console.log(`string + boolean; expecting result = "5true", actual = ${result1}`);
//  boolean + string
const result2 = c + a;
console.log(`boolean + string; expecting result = "true5", actual = ${result2}`);
// string + number
const result3 = a + b;
console.log(`string + number; expecting result = "520", actual = ${result3}`);
// number + string
const result4 = b + a;
console.log(`number + string; expecting result = "205", actual = ${result4}`);
// number + boolean
const result5 = b + c;
console.log(`number + boolean; expecting result = "21", actual = ${result5}`);
// boolean + number
const result6 = c + b;
console.log(`boolean + number; expecting result = "21", actual = ${result6}`);

// string * boolean
const result7 = a * c;
console.log(`string * boolean; expecting result = "5", actual = ${result7}`);
//  boolean * string
const result8 = c * a;
console.log(`boolean * string; expecting result = "5", actual = ${result8}`);
// string * number
const result9 = a * b;
console.log(`string * number; expecting result = "100", actual = ${result9}`);
// number * string
const result10 = b * a;
console.log(`number * string; expecting result = "100", actual = ${result10}`);
// number * boolean
const result11 = b * c;
console.log(`number * boolean; expecting result = "20", actual = ${result11}`);
// boolean * number
const result12 = c * b;
console.log(`boolean * number; expecting result = "20", actual = ${result12}`);

// string / boolean
const result13 = a / c;
console.log(`string / boolean; expecting result = "5", actual = ${result13}`);
//  boolean / string
const result14 = c / a;
console.log(`boolean / string; expecting result = "0.2", actual = ${result14}`);
// string / number
const result15 = a / b;
console.log(`string / number; expecting result = "0.25", actual = ${result15}`);
// number / string
const result16 = b / a;
console.log(`number / string; expecting result = "4", actual = ${result16}`);
// number / boolean
const result17 = b / c;
console.log(`number / boolean; expecting result = "20", actual = ${result17}`);
// boolean / number
const result18 = c / b;
console.log(`boolean / number; expecting result = "0.05", actual = ${result18}`);

// string to number
const d = Number(a);
// string to boolean
const e = Boolean(a);
console.log(`string to number and to boolean; expected result = "5 - number and true - boolean"; actual = ${d} - ${typeof(d)} and ${e} - ${typeof(e)}`);
// number to string
const f = String(b);
// number to boolean
const g = Boolean(b);
console.log(`number to string and to boolean; expected result = "20 - string and true - boolean"; actual = ${f} - ${typeof(f)} and ${g} - ${typeof(g)}`);
// boolean to number
const h = Number(c);
// boolean to string
const i = String(c);
console.log(`boolean to number and to string; expected result = "1 - number and true - string"; actual = ${h} - ${typeof(h)} and ${i} - ${typeof(i)}`);