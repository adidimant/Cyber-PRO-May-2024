// 1) Choose 4 questions from previous HW (for loops) - and implement their solution using a while loop.

const arr1 = [2, 5, 8, 3];
let sum = 0;
let i = 0;

while (i < arr1.length) {
  sum += arr1[i];
  i++;
}

console.log(sum);

const arr2 = [1, 4, 6, 9, 10];
let even = 0;
let k = 0;

while (k < arr2.length) {
  if (arr2[k] % 2 === 0) {
    even++;
  }
  k++;
}

console.log(even);

const arr3 = [7, 2, 10, 4, 6];
let bigest = arr3[0];
let b = 1;

while (b < arr3.length) {
  if (arr3[b] > bigest) {
    bigest = arr3[b];
  }
  b++;
}

console.log(bigest);

let oddSum = 0;
let c = 1;

while (c <= 10) {
  if (c % 2 !== 0) {
    oddSum += c;
  }
  c++;
}

console.log(oddSum);

// 2) Math.random(); // creates a random number in the range of 0 to 1
// Create a function that return a number in the range of 0 to 100

function randomNumber() {
  return Math.random() * 101;
  //   return Math.floor(Math.random() * 100);
}

console.log(randomNumber());

// 3) Math.random(); // creates a random number in the range of 0 to 1
// Create a lottery function, that returns a number in the range of 0 to 6000000

function randomLotteryNumber() {
  return Math.random() * 6000001;
  //   return Math.floor(Math.random() * 6000000);
}

console.log(randomLotteryNumber());

// 4) Write a function that accepts a number n, randomize number between 0 to 100, and return how much you can divide the random number with n.
// note - please use what you created in question #2 as well
// the function also should console.log the random number that was chosen

function divideRandomByN(n) {
  const randomNum = randomNumber();
  console.log("Random number chosen: " + randomNum);

  const divisions = randomNum / n;
  //   const divisions = Math.floor(randomNum / n);
  return divisions;
}

console.log(divideRandomByN(10));
console.log(divideRandomByN(105));
