// ---------- Branching | if else ----------
function funcTest(time) {
  let str = "";
  if (time < 12) {
    // ...
    str = "Selamat Pagi";
    return str;
  } else if (time <= 18) {
    // ...
    str = "Selamat Sore";
    return str;
  } else {
    // ...
    str = "Selamat Malam";
    return str;
  }
}

function funcTest2(time) {
  if (time < 12) return "Selamat Pagi";
  else if (time <= 18) return "Selamat Sore";
  else return "Selamat Malam";
}

// console.log(funcTest2(18));

// ---------- Branching | ternary conditional ----------
// Adanya ternary digunakan untuk mempersingkat kode dengan syarat kondisi sedikit dan juga tidak ada proses lagi didalam pengkondisiannya
function ternary1(time) {
  // condition ? true : false
  time < 12 ? "Selamat Pagi" : "Selamat Malam";
}

function ternary2(time) {
  // condition ? true : else if condition ? true : false
  return time < 12
    ? "Selamat Pagi"
    : time <= 18
    ? "Selamat Sore"
    : "Selamat Malam";
}

// console.log(ternary2(15));

// ---------- Branching | nested if ----------

function nestedIf() {
  let v1 = 400;
  let v2 = 700;

  if (v1 === 400) {
    if (v2 === 700) {
      return "Value oof v1 is 400 and v2 is 700";
    }
  }
}

function nestedIf2() {
  let v1 = 400;
  let v2 = 700;

  return v1 == 400
    ? v2 == 700
      ? "Value oof v1 is 400 and v2 is 700"
      : null
    : null;
}

// console.log(nestedIf2());

// ---------- Branching | switch case ----------
function switchCase(a) {
  switch (a) {
    case 3:
      console.log("Too Small");
      break;
    case 4:
      console.log("Exactly!");
      break;
    case 5:
      console.log("Too Large");
      break;
    default:
      console.log("I don't know such values");
  }
}

function switchCase2(a) {
  if (a === 3) {
    console.log("Too Small");
    return;
  } else if (a === 4) {
    console.log("Exactly!");
    return;
  } else if (a === 5) {
    console.log("Too Large");
    return;
  } else {
    console.log("I don't know such values");
    return;
  }
}

let a = 2 + 2;
switchCase2(a);
