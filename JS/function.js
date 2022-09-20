// ---------- Function | Without Parameters ----------
function sayHello() {
  console.log("Hello");
}

function sayHello2() {
  return "Hello";
}

// sayHello(); // Output: Hello
// console.log(sayHello2()); // Output: Hello

// console.log(sayHello()); // Output: Hello /n undefined
// sayHello2(); // Output:

// ---------- Function | With Parameters ----------
function greeting(jam) {
  if (jam < 12) {
    console.log("Selamat Pagi");
  } else if (jam < 18) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat Malam");
  }
}

function greeting2(jam, nama = "Anonim") {
  if (jam < 12) {
    console.log(`Selamat Pagi, ${nama}!`);
  } else if (jam < 18) {
    console.log(`Selamat Sore, ${nama}!`);
  } else {
    console.log(`Selamat Malam, ${nama}!`);
  }
}

const hour = 15;
// greeting2(hour, "Steven");

// ---------- Lambda/Arrow Function ----------
const funcTest = (nama) => {
  console.log(`Hello, ${nama}!`);
  funcTest2();
};

const funcTest2 = () => {
  console.log("Selamat mengerjakan");
};

funcTest("Steven");

// ---------- Anonymous Function ----------
// To Be Discuss pada saat masuk materi React
/*
function () {
    ...
}

() => {
    ...
}
*/
