'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//* BANKIST APP

//- Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//- Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//- Functions:
//> Writing code in the global context is a BAD PRACTICE

//. Movements (plce where deposits/withdrowals are shown)
function displayMovements(movements) {
  //: empties the container
  containerMovements.innerHTML = '';

  //: inserts elements in the container and renames them based on value
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;
    //> insertAdjacentHTML(after[-begin/-end] or before[-begin/-end])
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //: function call to calcBalance + display
  });
}
displayMovements(account1.movements);

//. Calculates the balnace + sets the balnce textContent
function calcDisplayBalance(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
}
calcDisplayBalance(account1.movements);

//. Create usernames
function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //> makes a new property in accaunts[i] with username
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
createUsernames(accounts); //: js, stw, etc...
console.log(accounts);

//&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/////////////////////////////////////////////////

//& ///////////////////////////////////////////////
//* LECTURES

// /////////////////////////////////////////////////
//* Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //. .slice() method
// //> returns a new array but only with mutated parts

// console.log(arr.slice(2)); //: [c, d, e]
// console.log(arr.slice(2, 4)); //: [c, d]
// //> extracts from 2nd to last to the last
// console.log(arr.slice(-2)); //: [e, d]
// console.log(arr.slice(-1)); //: [e]
// console.log(arr.slice(1, -2)); //: [b, c]

// //> .slice() without any arguments will create a shallow copy
// console.log(arr.slice()); //: [a, b, c, d, e]
// //> this is the same, but not possible to chain methods
// console.log([...arr]);

// //. .splice() method
// //> the same as .slice BUT mutates the array
// //> AND .splice(startFrom, howManyToDelete)

// //> removese the firtst 2 el
// console.log(arr.splice(2)); //: [c, d, e]
// console.log(arr); //: [a, b] -> extracted elements are gone
// //> removes the last element of arr
// console.log(arr.splice(-1));
// console.log(arr); //: [a, b, c, d] (if we remove the previous .splice())
// //> removes from 1(b) 2 elements (b,c)
// console.log(arr.splice(1, 2)); //: [b, c]
// console.log(arr); //: [a, d, e]

// //. reverse() method
// //> reverses the items in an array and mutates it

// const arr2 = ['e', 'd', 'c', 'b', 'a'];
// arr2.reverse();
// console.log(arr2); //: [a, b, c, d, e]

// //. concat() method
// const letters = arr.concat(arr2);
// console.log(letters);
// //> the same result with destructuring
// console.log([...arr, ...arr2]);

// //. join() method
// console.log(letters.join('-'));

// //* The new at() Method
// //> returns an element from it's position

// const arr = [23, 11, 64];
// console.log(arr[0]); //: 23
// console.log(arr.at(0)); //: 23

// //. getting the last postion
// console.log(arr[arr.length - 1]); //: 64
// //> .slice() returns the mutated arr from the last el to last el -> [64] -> [0] returns the value out of the array -> 64
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //> at() works also on strings -> returns the last char of a string

// //* Looping Arrays: forEach() method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //> Math.abs -> absolute removes the - sighn
//   }
// }

// console.log('--- FOREACH ---');
// //> recives current el of the array as an argument
// //> break and continue do not work in forEach() loop
// //! works only in this order -> element, index, array
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)

//* forEach() with Maps and Sets

// //. Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //.Set
// //> Set uses map too for the whole thing
// //> key = value -> a set doesn't have a key nad indexes
// //> _ undersocre is a throwaway value in JS
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// //* The map() Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// //. map() example
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd; //> multiplys every value of arr by 1.1
//   // return 23; //: sets all the values in the arr to 23
// });

// //: making an arrow function with .map()
// const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

// //: making a for of loop instead of .map()
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDarrow);

// //. map() <-> forEach()
// //> forEach() does something with/to a value one by one
// // const test = movements.forEach(function (mov, i, arr) {
// // if (mov > 0) {
// //   console.log(`Movement ${i + 1} You deposited ${mov}`);
// // } else {
// //   console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// // }
// // });
// //> returns the values to the variable and adds them to an Array
// const movementsDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1} You ${
//     mov > 1 ? 'deposited' : 'withdrew'
//   } deposited ${Math.abs(mov)}`;
// });

// console.log(movementsDescriptions);

// //* The filter() Method
// //> conditions that do pass, make into an array
// //! it is possible to chain lots of methods with it instead of for loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits); //: logs only positive values

// //. same with for loop
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrowals = movements.filter(mov => mov < 0);

// console.log(withdrowals);

//* The reduce() Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//> the first parameter: is accumulator -> snawball
//> the second parameter is the initial value, where the accumulator starts
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
//. reduce() with arrow function =>
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance); //: 3840

//. Same with a for loop
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

//- Maximum value

console.log(movements);

// const max = movements.reduce((acc, mov) => maxNum < cur &&  );

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);