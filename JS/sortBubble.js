/*
Konsep Bubble Sort yaitu menggunakan nested loop untuk membandingkan element pertama dan element selanjutnya, ketika element pertama lebih besar daripada element selanjutnya maka akan dilakukan pertukaran nilai. Algoritma ini sangat tidak cocok untuk mengolah sebuah data yang relatif banyak atau besar karena processing time yang cukup besar karena memaksa untuk mengecek satu per satu element.
*/
function sortBubble(array) {
  console.time("sortBubble");
  let len = array.length;
  let temp = array.slice();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (temp[j] > temp[j + 1]) {
        let varTemp = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = varTemp;
      }
    }
  }
  console.timeEnd("sortBubble");
  return temp;
}

const array = [
  89, 97, 56, 72, 79, 47, 4, 69, 55, 13, 41, 59, 62, 64, 60, 17, 52, 33, 18, 67,
  30, 83, 14, 2, 88, 24, 86, 71, 37, 42, 70, 75, 74, 50, 53, 45, 9, 26, 11, 29,
  81, 54, 23, 3, 39, 84, 90, 66, 28, 91, 65, 95, 80, 34, 100, 99, 40, 87, 25,
  77, 94, 36, 78, 51, 19, 63, 8, 1, 85, 35, 73, 21, 15, 68, 92, 5, 48, 10, 43,
  31, 98, 12, 20, 49, 22, 38, 6, 46, 27, 44, 96, 93, 58, 76, 32, 7, 57, 16, 82,
  61,
];
console.log(sortBubble(array));
// sortBubble: 0.459ms
