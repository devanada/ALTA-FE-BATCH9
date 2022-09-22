/*
Teknis Merge Sort adalah dimulai dengan membagi array menjadi dua bagian (kiri dan kanan), lalu membandingkan nilai tiap index pada pecahan array manakah yang lebih kecil sehingga terjadilah perpindahan nilai diantara kedua bagian tersebut. Setelah dibandingkan, pecahan array ini akan digabung kembali menjadi sebuah array yang utuh
*/
function sortMerge(array) {
  console.time("sortMerge");
  const result = divide(array);
  console.timeEnd("sortMerge");
  return result;
}

function divide(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2),
    one = array.slice(0, mid),
    two = array.slice(mid);
  return sort(divide(one), divide(two));
}

function sort(one, two) {
  const sorted = [];
  while (one.length && two.length) {
    if (one[0] <= two[0]) {
      sorted.push(one.shift());
    } else {
      sorted.push(two.shift());
    }
  }
  const output = [...sorted, ...one, ...two];
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
console.log(sortMerge(array));
// sortMerge: 0.242ms
