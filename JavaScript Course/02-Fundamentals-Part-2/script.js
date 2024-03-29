// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My Name is Jonas");
// }

// // calling / running / invoking functionq
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// // 5, 0 are the arguments of the funcion
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Number is a built in function like console.log()
// const num = Number("23");

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3 (1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`
// }

// console.log(yearsUntilRetirement(1991, 'Johnas'))
// console.log(yearsUntilRetirement(1999,'Nikita'))

// // Calling for function from another function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples)
// const orangePieces = cutFruitPieces(oranges)

//   const juice = `Juice with ${applePieces } peices of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2,3 ));

// const calcAge = function(birthYear) {
//   return 2037 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {

//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0 ) {
//     return retirement;
//   }else {
//     return `${firstName}  already retiered`;
//   }

//   return retirement;
//   // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michel", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // friends.length -> 0 -1 = last

// friends[2] = "Jay";
// console.log(friends); //changes the 'friend' 3 (Peter) for Jay
// // friends = ['Bob', 'Alice'] can not be completely changed

// const fristName = "Jonas";
// const jonas = [fristName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michel", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); //looks like it is push but in fornt
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop(); // Last
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// //Returns the postion of an element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); //-1 If it is not in the array

// //Returns boolean value in case the sting ins in the array
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// //This method has a strict equality for this check
// friends.push(23);
// console.log(friends.includes("23")); //23 is a string and 23 was added as number to the string

// if (friends.includes("Steven")) {
//   console.log(`You have a friend called Peter`);
// }

//* OBJECTS

//* Introduction to objects
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // Object literal synatax
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Perer", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName); // Dot notation
// console.log(jonas["lastName"]); //Bracket notation we can put a value inside of it

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do oyou want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("not defined");
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(jonas[("firstName", "lastName")]);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Perer", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   // Only works with function expression
//   // return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   // hasDriversLicense: function () {
//   //   if (this.hasDriversLicense) {
//   //     return "a";
//   //   } else {
//   //     return "no";
//   //   }
//   // },
//   getSummery: function () {
//     return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he has ${
//       this.hasDriversLicense ? "a" : "no"
//     } drivers's license`;
//   },
// };

// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// // efficient way of retrieving data out of the funcion instead of calcuculating t multiple times
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // "Jonas is a 46-year old teacher, and he has a/no driver's license"

// // console.log(
// //   `${jonas.firstName} is a ${
// //     jonas.job
// //   } and he has ${jonas.hasDriversLicense()} drver's license`
// // );

// console.log(jonas.getSummery());

//* LOOPS

console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");

// for loop keeps running while condition is TRUE
// first we specify the starting point of the loop
// then the end point
// then what happens every ideration
// rep = rep + 1 -> rep++
// put the variable where it has to change
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//We want to induvidually log every element of the array to the console
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}
//i < 5 [0,1,2,3,4, 5 does not exist!] exits the loop at 4| i < jonas.lenght [1,2,3,4,5] exits the loop at 5
const types = [];
for (let i = 0; i < jonas.length; i++) {
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

// calulate age and store in a new array
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//0, 1, ..., 4
//4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetiotion ${rep} ❤
  `);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  // console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You've got a 6! Loop is about to end...`);
}
