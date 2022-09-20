/*
Jenis Looping di JavaScript
1. for loop <=
2. while loop
3. for in
4. for of
5. forEach <=
6. map <= sering digunakan di FE
*/

const arrOfItem = ["Apel", "Manggis", "Semangka", "Melon"]; // <~ Array of String

// ---------- FOR LOOP ---------- //
/*
for (init; condition; post) {
    // your code here
}
*/

function forLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function forLoop2() {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
}

// forLoop();

// ---------- WHILE LOOP ---------- //
function whileLoop() {
  let i = 0;

  while (i < 5) {
    console.log(i);
    i++;
  }
}

// whileLoop();

// ---------- FOR IN ---------- //
/*
FOR IN digunakan untuk melakukan perulangan pada object, bisa juga digunakan pada array. FOR IN tidak perlu menentukan kondisi dan juga post agar looping bisa berhenti, FOR IN looping secara otomatis bakal berhenti ketika dia sampai di penghujung item dari sebuah object/array
*/
function forIn() {
  for (let i = 0; i < arrOfItem.length; i++) {
    console.log(arrOfItem[i]);
  }
  for (const key in arrOfItem) {
    // console.log(key); // Output: index/urutan dari item
    console.log(arrOfItem[key]); // Output: value dari item itu sendiri
  }
}

// forIn();

// ---------- FOR OF ---------- //
/*
FOR OF digunakan untuk melakukan perulangan pada array. FOR OF tidak perlu menentukan kondisi dan juga post agar looping bisa berhenti, FOR OF looping secara otomatis bakal berhenti ketika dia sampai di penghujung item dari sebuah array
*/
function forOf() {
  for (const item of arrOfItem) {
    console.log(item); // Output: value dari item itu sendiri
  }
}

// forOf();

// ---------- FOREACH ---------- //
/*
FOEARCH looping basically sama dengan FOR OF ataupun FOR IN, hanya saja FOREACH selain digunakan untuk melakukan perulangan, dia juga bisa digunakan untuk memanipulasi sebuah nilai dari sebuah item of array. Akan dibahas kembali penggunaan full tentang forEach setelah mengetahui Array/Object
*/
function funcForEach() {
  arrOfItem.forEach((item, index) => {
    item = `${index}. ${item}`;
    console.log(item);
  });
}

// funcForEach();

// ---------- MAP ---------- //
/*
FOEARCH looping basically sama dengan FOR OF ataupun FOR IN, hanya saja FOREACH selain digunakan untuk melakukan perulangan, dia juga bisa digunakan untuk memanipulasi sebuah nilai dari sebuah item of array. Bedanya kalau map biasa digunakan untuk melakukan perulangan pada sebuah komponen/elemen html. Akan dibahas kembali penggunaan full tentang map setelah mengetahui Array/Object
*/
function funcMap() {
  arrOfItem.map((item, index) => {
    item = `${index}. ${item}`;
    console.log(item);
  });
}

funcMap();
