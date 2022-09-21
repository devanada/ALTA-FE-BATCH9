const myObj = {
  name: "Sarah",
  age: 24,
  is_married: false,
  address: {
    street: "Sesame Street",
    city: "New York",
  },
  hobbies: ["Playing Games", "Watching Movies", "Listening to Music"],
  funcTest: () => {
    const num = Math.random();
    return num;
  },
  home: null,
};

// DECLARATION
let objLiteral = {};
let objConstructor = new Object();

// ---------- HOW TO ACCESS PROPERTY VALUE ----------
// Dot Notation
// console.log(myObj.address.street);

// Bracket Notation
// console.log(myObj["address"]["street"]);

// ---------- HOW TO REASSIGN VALUE IN A PROPERTY ----------
// console.log("Before", myObj.name);
// myObj.name = "Sarah Whitaker"; // Dot Notation
// myObj["name"] = "Sarah Whitaker"; // Bracket Notation
// console.log("After", myObj.name);

// ---------- HOW TO ADD A PROPERTY ----------
// console.log("Before", myObj);
myObj.pet = "Cat"; // Dot Notation
// myObj["pet"] = "Cat"; // Bracket Notation
myObj.address.postal_code = 112233; // Dot Notation Nested Object
// myObj["address"]["postal_code"] = 112233; // Bracket Notation Nested Object
// console.log("After", myObj);

// ---------- HOW TO DELETE A PROPERTY ----------
// console.log("Before", myObj.address);
// delete myObj.home; // Dot Notation
// delete myObj["home"]; // Bracket Notation
// delete myObj.address.city; // Dot Notation Nested Object
// delete myObj["address"]["city"]; // Bracket Notation Nested Object
// delete myObj.address["city"]; // Dot Bracket Notation Nested Object
// delete myObj['address'].city; // Bracket Dot Notation Nested Object
// console.log("After", myObj.address);

// ---------- HOW TO CHECK THE DATA TYPE OF PROPERTY'S VALUE ----------
// console.log(typeof myObj.is_married);

// ---------- HOW TO GENERATE ARRAY OF KEYS/VALUES ----------
let keysInMyObj = Object.keys(myObj);
let valInMyObj = Object.values(myObj);
// console.log(valInMyObj);

let formInput = {
  full_name: "Thomas Shelby",
  nick_name: "",
  address: "Birmingham",
  message: "Blablabla",
};

const check = Object.values(formInput).every((value) => {
  return value !== "";
});

// ---------- HOW TO PUSH A NEW ITEM IN NESTED OBJECT ----------
// Push hanya bisa bekerja jika tipe datanya itu Array
// console.log("Before", myObj.hobbies);
myObj.hobbies.push("Blablabla");
// console.log("After", myObj.hobbies);

// ---------- HOW TO LOOP AN OBJECT ----------
// Looping pada object bisa menggunakana for in loop
// for (const key in myObj) {
//   console.log(key); // Memunculkan daftar nama key dari sebuah proerty
//   console.log(myObj[key]); // Memunculkan daftar nilai/value dari sebuah property
// }

// ---------- HOW TO CLONE/DUPLICATE AN OBJECT ----------
// Object.assign(target, source)
let dupe1 = Object.assign({}, myObj); // Using Object.assign
let dupe2 = { ...myObj }; // Using Spread
let dupe3 = JSON.parse(JSON.stringify(myObj)); // Using JSON method
