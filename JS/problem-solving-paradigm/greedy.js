// coin change (object)
function coinChange(amount) {
  const coins = {
    twentyFiveCent: 25,
    tenCent: 10,
    fiveCent: 5,
    oneCent: 1,
  };
  let result = {};
  let moneyLeftover = amount;

  for (const key in coins) {
    console.log(`LOOPING ~> ${key}: ${coins[key]}`);
    while (moneyLeftover >= coins[key]) {
      console.log("CEK KEY APAKAH SUDAH ADA");
      if (result[key]) {
        console.log("SUDAH ADA, INCREMENT NILAI");
        result[key]++;
      } else {
        console.log("MENAMBAHKAN KEY BARU DALAM result");
        result[key] = 1;
      }
      moneyLeftover = (moneyLeftover - coins[key]).toFixed(2);
      console.log(result);
      console.log(`SISA UANG: ${moneyLeftover}`);
    }
  }
  return result;
}

// coin change (array)
function coinChange2(amount) {
  const coins = [25, 10, 5, 1];
  let result = [];
  let moneyLeftover = amount;

  for (const coin of coins) {
    while (moneyLeftover >= coin) {
      result.push(coin);
      moneyLeftover = (moneyLeftover - coin).toFixed(2);
    }
  }
  return `${result}, ${coins}`;
}

// console.log(coinChange2(42));
// [25, 10, 5, 1, 1]
// { twentyFiveCent: 1, tenCent: 1, fiveCent: 1, oneCent: 2 }

let test = 6.65 - 5;
console.log(test); // 1.6500000000000004
console.log(Math.round(test)); // 2
console.log(Math.floor(test)); // 1
console.log(+test.toFixed(2)); // 1.65
console.log(+test.toPrecision(3)); // 1.65
