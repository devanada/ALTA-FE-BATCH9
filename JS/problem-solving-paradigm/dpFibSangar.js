/*
Pemanfaatan DP dengan lebih optimal jika dibanding dengan pendekatan Top Down ataupun Bottom Up, karena kita tidak menggunakan variabel map untuk menampung data yang telah kita hitung. Kita hanya memanfaatkan variabel biasa untuk menyimpan data perhitungan dua angka sebelumnya.
*/

let count = 0;

const fiboDPSangar = (n) => {
  console.time("DP Sangar");
  if (n <= 1) {
    console.timeEnd("DP Sangar");
    return n;
  }

  let fiboIMinSatu = 1;
  let fiboIMinDua = 0;
  let fiboI = -1;

  for (let i = 2; i <= n; i++) {
    count++;
    fiboI = fiboIMinSatu + fiboIMinDua;
    fiboIMinDua = fiboIMinSatu;
    fiboIMinSatu = fiboI;
  }

  console.timeEnd("DP Sangar");
  return fiboI;
};

console.log(fiboDPSangar(50)); // 12586269025
console.log(count); // 49
// DP Sangar: 0.054ms
