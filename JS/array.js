/*
Array adalah sebuah tipe data yang mana dia digunakan untuk menyimpan kumpulan informasi/data yang disimpan secara berurutan didalam satu variabel.
Setiap item yang ada didalam array memiliki index (zero-based), yang dimulai dari angka 0 untuk item pertama, angka 1 untuk item kedua, dan seterusnya.
*/

// ---------- DECLARATION ----------
let arrLiteral = [];
let arrConstructor = new Array();

let fruits = ["Apple", "Orange", "Plum"];
let scores = [98, 85, 91, 78, 82];
let temp = ["Apple", 1, true, null, {}, []];

// ---------- HOW TO ACCESS ITEM IN ARRAY ----------
// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Orange
// console.log(fruits[2]); // Plum

// ---------- HOW TO REASSIGN ITEM IN ARRAY ----------
fruits[2] = "Pear";
// console.log(fruits);

// ---------- HOW TO ADD AN ITEM IN ARRAY ----------
// fruits[fruits.length] = "Lemon";
fruits.push("Lemon"); // Menambahkan di akhir array
// console.log("add", fruits);
fruits.unshift("Melon"); // Menambahkan di awal array
// console.log("add", fruits);

// ---------- HOW TO REMOVE AN ITEM IN ARRAY ----------
fruits.pop(); // Menghapus element terakhir dari sebuah array
// console.log("remove", fruits);
fruits.shift(); // Menghapus element pertama dari sebuah array
// console.log("remove", fruits);
let fruits2 = ["Apple", "Pear", "Lemon", "Banana", "Avocado"];
// fruits2.splice(2, 2); // Menghapus element kedua dengan delete count sebanyak dua
// fruits2.splice(2, 2, "SOLD OUT", "SOLD OUT"); // Menghapus element kedua dengan delete count sebanyak dua, setelah itu menambahkan element baru
// console.log(fruits2);

// ---------- HOW TO COPY/DUPLICATE AN ARRAY ----------
let sample = ["a", "b", "c", "d"];
let dupeSample = sample.slice(); // Menduplikasi keseluruhan element di sebuah array
// console.log(dupeSample);

let halfDupe = sample.slice(0, sample.length / 2); // Menduplikasi setengah element awal di sebuah array
let endDupe = sample.slice(sample.length / 2, sample.length); // Menduplikasi setengah element akhir di sebuah array
// console.log(halfDupe);
// console.log(endDupe);

// ---------- HOW TO LOOP AN ARRAY ----------
for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

for (const fruit of fruits) {
  //   console.log(fruit);
}

for (const key in fruits) {
  //   console.log(fruits[key]);
}

// ---------- REAL SCENARIO ----------
// Biasa disebut sebagai array of object
let peoples = [
  {
    nama: "Melody",
    umur: 27,
  },
  {
    nama: "Ayana",
    umur: 21,
  },
  {
    nama: "Sonya",
    umur: 24,
  },
  {
    nama: "Jeje",
    umur: 22,
  },
];

// ACCESSING SOME VALUE INSIDE ARRAY'S ELEMENT
console.log(peoples[peoples.length / 2].nama);
console.log(peoples[peoples.length / 2]["nama"]);

peoples.forEach((item, index) => {
  item.id = index + 1;
});

// peoples.map((item, index) => {
//   item.id = index + 1;
// });

// const mutate = peoples.map((item, index) => {
//   return item.nama;
// });

// console.log(peoples);
