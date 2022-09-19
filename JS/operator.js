// ---------- ARITHMETIC ----------
let a, b, add, sub, mul, div, mod;
/*
let a;
let b;
let add;
let sub;
let mul;
let div;
let mod;
*/

a = 10;
b = 20;

add = a + b;
// console.log(add); // 30
sub = a - b;
// console.log(sub); // -10
mul = a * b;
// console.log(mul); // 200
div = a / b;
// console.log(div); // 0.5
mod = a % b;
// console.log(mod); // 10

let increment = 2;
increment++;
// console.log(increment); // 3

let decrement = 4;
decrement--;
// console.log(decrement); // 3

let test = increment ** decrement; // 27
// console.log("test", test);

// ---------- COMPARISON ----------
// comparison pasti outputnya boolean
const tigaInt = 3;
const tigaStr = "3";

// == kalau sama dengan 2, artinya dia membandingkan apakah nilainya sama
// === kalau sama dengan 3, artinya dia membandingkan apakah nilai dan juga tipe datanya sama
// console.log(tigaInt == tigaStr); // true
// console.log(tigaInt === tigaStr); // false

// console.log(tigaInt != tigaStr); // false
// console.log(tigaInt !== tigaStr); // true

// ---------- LOGICAL ----------
// Penggunaan logical biasanya ada di pengkondisian
const condition1 = true;
const condition2 = true;

/*
true && true = true
true && false = false
false && true = false
false && false = false
*/
// console.log(condition1 && condition2);

/*
true || true = true
true || false = true
false || true = true
false || false = false
*/
// console.log(!condition1 || !condition2);

// ---------- ASSIGNMENT ----------
let var1 = 2;
// var1 = 3;
// var1 += 3; // var1 = var1 + 3 (5)
// var1 -= 3; // var1 = var1 - 3 (-1)
// var1 *= 3; // var1 = var1 * 3 (6)
// var1 /= 3; // var1 = var1 / 3 (0.6666666666666666)
// var1 %= 3; // var1 = var1 % 3 (-2)
console.log(var1);

/*
=   assignment
==  perbandingan dengan melihat nilainya saja
=== perbandingan dengan melihat nilai dan juga tipe datanya  
*/
