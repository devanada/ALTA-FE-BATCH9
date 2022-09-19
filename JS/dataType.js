/*
DATA TYPES in JavaScript
- Primitive: String, Number, BigInt, undefined, Boolean, symbol, null
- Collections: Array, Object
*/

// let variableVar;
// let variableVar = null;

// ---------- STRING ----------
let firstName = "Robert";
let lastName = "Smalls";

// const fullName = firstName + lastName; // RobertSmalls
// const fullName = firstName + " " + lastName; // Robert Smalls
// const fullName = `${firstName} ${lastName}`; // Robert Smalls
// console.log(fullName);

// Check panjang string dengan menggunakan method .length
// let fName = "Ada Lovelace";
// console.log(fName.length);
// console.log("Ada Lovelace".length);

// ---------- NUMBER ----------
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;
let integer = 4;
let float = 4.7;
let max = Infinity;
let strNum = "12345";

// console.log(parseInt(strNum)); // 12345
// console.log(strNum); // "12345"
// console.log(+strNum); // 12345

let sum = 4 + 5;
let difference = 9 - 4;
let product = 4 * 5;
let quotient = 20 / 4;
let remainder = 9 % 2;

// console.log(sum, difference, product, quotient, remainder);

// console.log(1 / 0); // Infinity
// console.log(Infinity); // Infinity
// console.log("not a number" / 2); // Nan
// console.log("10" / 2); // 5
// console.log("10" + 2); // 102
// console.log(2 + "10"); // 210

// ---------- BOOLEAN ----------
let nameFileChecked = true;
let ageFiledChecked = false;

let isGreater = 4 > 1;
// console.log(isGreater);
