"use strickt";

// var str = "How can mirrors be real if our eyes aren't real";

// console.log(`--- TEST ---`);
// const toJadenCase = function (prototype) {
//   //...
//   str = prototype;
//   for (i = 0; i < prototype.length; i++)
//     if (prototype[i] === prototype[i].lowerCase) {
//       return console.log("lower");
//     } else if (prototype[i] === prototype[i].uppercase) {
//       return console.log("upper");
//     }
// };

// toJadenCase(str);

// //* I think temps.push(array1[i], array[2])

// const temps1 = [-6, 17, 12, 12, 14];
// const temps2 = [-7, 18, 3, 3, 4, 6];
// //* Combining both arrays
// function arrayAdder(arr) {
//   // sum = 0
//   const temporar = [];
//   const tempsSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     temporar.push(arr);
//     tempsSum.push(temporar[i]);
//   }

//   return console.log(arr, tempsSum);
// }

// arrayAdder(temps1, temps2);

// const temps2 = [-7, 18, 3, 3, 4, 6];

// const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// function calcTempAmplitudeNew(t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return console.log(`The tempertaure amplitude is: ${max - min}ºC`);
// }

// // calcTempAmplitude(temperatures);
// calcTempAmplitudeNew(temps1, temps2);
//* I want to concatinate n arrays, basically withot defining n ammount of parameters
// const temps1 = [-6, 17, 12, 12, 14];
// const temps2 = [-7, 18, 3, 3, 4, 6];
// function arraySum() {
//   let temps = [];
//   let temporar = [];
//   for (let i = 0; i < arguments.length; i++) {
//     //  let temps = [];
//     // let temporar = [];
//     // temps = arguments[0].concat(arguments[1]);
//     temps = temporar.concat(arguments[i]);
//   }
//   return console.log(temps);
// }
// arraySum(temps1, temps2);

// console.log(`--- TEST concatinate ---`);
// console.log(temps1.indexOf(temps1[]));
//*
// function arraySum(arr) {
//   let i = 0;
//   const temps = [];

//   while (temps < arraySum[i]) {
//     temps.concat(arraySum[i]);
//   }
// return console.log(temps);
// }

// arraySum(temps1, temps2);
// function arraySum(arr) {
// let sum = arr[arraySum[1]].concat(arr[arraySum[0]]);
// return sum;
// console.log(arr);
// }
// arraySum(temps1, temps2);
// console.log(arraySum(temps1, temps2));
// console.log(typeof arraySum(temps1, temps2));
// console.log(temps1, temps2);

// ? Reverse string function
// const str = "apple";

// function reverse(str) {
//   let ctr = "";
//   for (i = str.length; i !== 0; i--) {
//     ctr += str[i - 1];
//   }
//   return ctr;
// }
// console.log(reverse(str));

// const str = "apple";

// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     //* This basically means we put "character" in front of reversed
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// console.log(reverse(str));
// //? Stupid little funcion to add things into an array multiple times
// function runMultiplyer(multiplyWhat, multiplyBy) {
//   let result = [];
//   for (let i = 0; i < multiplyBy; i++) {
//     result += multiplyWhat;
//   }
//   return console.log(result);
// }
// runMultiplyer(5, 3);