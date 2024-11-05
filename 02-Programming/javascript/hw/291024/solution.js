/*
(1) selecting 4 questions:
*/
/*
Reverse an Array:
Write a for loop that reverses the elements of the array [1, 2, 3, 4, 5] and stores it in a new array.
Expected Output: [5, 4, 3, 2, 1]
*/

const arr1 = [1,2,3,4,5];
const result = new Array(arr1.length);

let i = 0;

while (i < arr1.length) {
  result[i] = arr1[arr1.length - 1 - i];
  i++;
}

/*
Count Characters in a String - this should be a function that accepts the string & the char to count as a second param:
Use a for loop to count the number of occurrences of the letter "a" in the string "javascript is awesome".
Expected Output: 3
*/

function countCharsInString(str, char) {
  let count = 0, i = 0;

  while (i < str.length) {
    if (str.charAt(i) == char) {
      count++;
    }
    i++;
  }

  return count;
}

const aviad = countCharsInString('cyber-pro', 'r');
console.log(aviad); // 2


/*
2) Math.random(); // creates a random number in the range of 0 to 1
Create a function that return a number in the range of 0 to 100
*/

function generateRandomNumber0_100() {
  const random = Math.random(); // returns a random number between 0 to 1
  const multipliedNum = random * 100; // a number between 0 to 100, but with a friction part
  const finalResult = Math.ceil(multipliedNum);
  
  return finalResult;
  // 0.662 * 100 = 66.2 => round to 67
}

/*
3) Math.random(); // creates a random number in the range of 0 to 1
Create a lottery function, that returns a number in the range of 0 to 6000000
*/
const random2 = Math.random();
const multipliedNum2 = random2 * 6000000; // a number between 0 to 6000000, but with a friction part
const result3 = Math.ceil(multipliedNum2);
console.log(result3);

/*0 - 1
0...1 * 6000000 = 0...6000000
*/

/*
4) Write a function that accepts a number n, randomize number between 0 to 100, and return how much you can divide the random number with n.
note - please use what you created in question #2 as well
the function also should console.log the random number that was chosen
*/

function countRandomNumDivision(n) {
  const randomNum = generateRandomNumber0_100();
  let count = 0;

  let currentNum = randomNum;

  while (currentNum >= 1) {
    currentNum /= n; // this is a shortcut for: currentNum = currentNum / n;
    count++;
  }

  return count - 1;
}
/*
8 / 2 => 4 (1) => 2 (2) => 1 (3) => 0.5 (4)    ==> returns 4-1 = 3
9 / 2 => 4.5 (1) => 2.25 (2) => 1.125 (3) => 0.5625 (4) ==> returns 4-1 = 3
*/