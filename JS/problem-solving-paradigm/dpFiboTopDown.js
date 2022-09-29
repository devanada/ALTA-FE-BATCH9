let count = 0; // Untuk menghitung berapa kali perhitungan/perulangan dilakukan
let mem = []; // untuk menyimpan hasil perhitungan

const fibTopDown = (n) => {
  count++;
  // jika sudah pernah dihitung sebelumnya, maka ambil dari memory
  if (mem[n]) return mem[n];

  // jika belum pernah dihitung, maka hitung dan masukkan ke memory lalu di return
  if (n <= 1) {
    mem[n] = n;
  } else {
    mem[n] = fibTopDown(n - 1) + fibTopDown(n - 2);
  }
  return mem[n];
};

const initFunction = (n) => {
  console.time("DP Top Down");
  const result = fibTopDown(n);
  console.timeEnd("DP Top Down");
  return result;
};

console.log(initFunction(50)); // 12586269025
console.log(count); // 99
// DP Top Down: 0.089ms
