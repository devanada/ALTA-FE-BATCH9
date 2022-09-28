/*
Seperti Merge Sort, Quick Sort menggunakan algoritma Divide and Conquer yang mana dia mengambil satu element sebagai poros dan juga membuat sebuah 2 array penampung. Setelah itu mencoba membagi array menjadi 2 bagian dan melakukan perbandingan nilai untuk menentukan posisi nilai terkecil.
*/
function sortQuick(array) {
  console.time("sortQuick");
  const result = sort(array);
  console.timeEnd("sortQuick");
  return result;
}

function sort(array) {
  if (array.length < 2) {
    return array;
  }

  let chosenIndex = array.length - 1,
    chosen = array[chosenIndex],
    a = [],
    b = [];
  for (let i = 0; i < chosenIndex; i++) {
    let temp = array[i];
    temp < chosen ? a.push(temp) : b.push(temp);
  }

  let output = [...sort(a), chosen, ...sort(b)];
  return output;
}

const array = [
  89, 97, 56, 72, 79, 47, 4, 69, 55, 13, 41, 59, 62, 64, 60, 17, 52, 33, 18, 67,
  30, 83, 14, 2, 88, 24, 86, 71, 37, 42, 70, 75, 74, 50, 53, 45, 9, 26, 11, 29,
  81, 54, 23, 3, 39, 84, 90, 66, 28, 91, 65, 95, 80, 34, 100, 99, 40, 87, 25,
  77, 94, 36, 78, 51, 19, 63, 8, 1, 85, 35, 73, 21, 15, 68, 92, 5, 48, 10, 43,
  31, 98, 12, 20, 49, 22, 38, 6, 46, 27, 44, 96, 93, 58, 76, 32, 7, 57, 16, 82,
  61,
];
console.log(sortQuick(array));
// sortQuick: 0.161ms
