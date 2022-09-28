/*
Konsep Binary Search adalah menggunakan array yang sudah tersortir secara ascending, pencarian dimulai dari element tengah, jika element tengah lebih kecil dari target maka geser ke kanan, jika besar daripada target maka geser ke kiri. Return -1 ketika target tidak ditemukan, return index ketika target ditemukan.
*/
function binarySearch(array, target) {
  console.time("binarySearch");
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] == target) {
      // found the target
      console.timeEnd("binarySearch");
      return middle;
    } else if (array[middle] < target) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // continue searching to the left
      end = middle - 1;
    }
  }
  console.timeEnd("binarySearch");
  return -1;
}

const array = [
  89, 97, 56, 72, 79, 47, 4, 69, 55, 13, 41, 59, 62, 64, 60, 17, 52, 33, 18, 67,
  30, 83, 14, 2, 88, 24, 86, 71, 37, 42, 70, 75, 74, 50, 53, 45, 9, 26, 11, 29,
  81, 54, 23, 3, 39, 84, 90, 66, 28, 91, 65, 95, 80, 34, 100, 99, 40, 87, 25,
  77, 94, 36, 78, 51, 19, 63, 8, 1, 85, 35, 73, 21, 15, 68, 92, 5, 48, 10, 43,
  31, 98, 12, 20, 49, 22, 38, 6, 46, 27, 44, 96, 93, 58, 76, 32, 7, 57, 16, 82,
  61,
];
const dupe = array.slice();
let sorted = dupe.sort((a, b) => {
  return a - b;
});
console.log(array);
console.log(binarySearch(sorted, 101));
console.log(binarySearch(array, 101));
// 0.056ms | 24 <~ Jika ditemukan
// 0.048ms | -1 <~ Jika tidak ditemukan
