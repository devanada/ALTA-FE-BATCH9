// ---------- PROMISE END ----------
/*
Promise - sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi(fulfill) atau gagal(reject) yang berdasarkan pada operasi async dan bisa menghasilkan sebuah output.
*/

let bentengTakeshi = new Promise((resolve, reject) => {
  console.log("---BENTENG TAKESHI MULAI---");
  console.log("Doakan aku ya!!!");
  let rate = Math.random() * 100;
  console.log("Ayo manis");
  setTimeout(() => {
    if (rate > 30) {
      resolve("Selamat anda berhasil menakhlukan benteng takeshi!"); // <~ callback
    } else {
      reject("Anda gagal menakhlukan benteng takeshi"); // <~ callback
    }
  }, 3000);
});

/*
playFunction dan playFunction2 itu adalah fungsi yang sama, hanya saja penulisan fungsi dan code didalamnya itu berbeda secara penulisan
*/

const playFunction = async () => {
  let strVariable = "";
  await bentengTakeshi
    .then((hasil) => {
      strVariable = "WIN";
      console.log(hasil);
    })
    .catch((gagal) => {
      strVariable = "LOSE";
      console.log(gagal);
    })
    .finally(() => {
      console.log("Bagaimana perasaan anda mengikuti benteng takeshi?");
    });
  console.log(strVariable);
};

async function playFunction2() {
  let strVariable = "";
  try {
    let result = await bentengTakeshi;
    strVariable = "WIN";
    console.log(result);
  } catch (error) {
    strVariable = "LOSE";
    console.log(error);
  } finally {
    console.log("Bagaimana perasaan anda mengikuti benteng takeshi?");
  }
  console.log(strVariable);
}

playFunction2();

// ---------- PROMISE END ----------
