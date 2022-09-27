// ---------- CALLBACK START ----------
/*
Callback - sebuah function yang dipanggil "setelah" melakukan sebuah proses
*/
const buyer = (message) => {
  console.log("pesan martabak dong? " + message);
};

const buyer2 = (message) => {
  console.log("pesan martabak dong?!!! " + message);
};

const seller = (callback) => {
  console.log("Pesan martabak dong?...(wait sedang dimasak)");
  setTimeout(() => {
    callback("Ok, martabak sudah selesai kakak");
  }, 3000);
};

seller(buyer);
seller(buyer2);
