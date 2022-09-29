let count = 0;
let mem = [];

const fibBottomUp = (n) => {
  console.time("DP Bottom Up");
  for (let i = 0; i <= n; i++) {
    count++;
    if (i <= 1) {
      mem[i] = i;
    } else {
      mem[i] = mem[i - 1] + mem[i - 2];
    }
  }
  console.timeEnd("DP Bottom Up");
  return mem[n];
};

console.log(fibBottomUp(50)); // 12586269025
console.log(count); // 51
// DP Bottom Up: 0.072ms

/*
Top Down vs Bottom Up
- Tidak bisa ditentukan better mana, karena ada pros and cons
- Bottom Up = punya kecenderungan menyelesaikan lebih dari seharusnya, 
    misal fibonacci, maka punya kecenderungan kita telah menghitung nilai-
    nilai sebeleumnya yang lebih kecil, namun di beberapa kasus, ada kondisi
    dimana sebenarnya kita tidak perlu menghitung seluruh data jika memang tidak dibutuhkan
- Top Down = lebih ke rekursif, ada kemungkinan perhitungannya lebih berat
*/
