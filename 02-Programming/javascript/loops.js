for (let i = 0; i < 10; i++) {
  // this code inside runs 10 times
}

for (let i = 0; i < arr.length; i++) {
  // this code runs arr.length times
}

// write a loop that prints every item of the array (the items should be printed by the order of the array)
const arr = [1,5,6,8,4,8];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// write a loop that prints this same array in an opposite way
for (let i = arr.length -1; i >= 0; i--) {
  console.log(arr[i]);
}

// write a loop that console every character of a string
const str = 'Hello';
for (let i =0; i<str.length; i++) {
  console.log(str.charAt(i));
}


/* !! while loops: */

const str5 = 'this-is-my-code';
let i = 0;

while (i < str5.length) {
  console.log(str5.charAt(i));
  i++;
}


while(true) { // inifinite loop - true is always true
  console.log("server is waiting for requests...");
}

/* Write a function, that accepts a number, and checks how much you can divide it by two
this solution needs to be with a while loop, return the result
 example: 16 => 8 => 4 => 2 => 1
 Output: 4
 example: 9 => 4 => 2 => 1
 Output: 3
*/

function countHowManyDevidableByTwo(number) {
  let count = 0;

  if (number % 2 == 1) {
    number--;
  }

  while (number > 1) {
    number = number / 2;
    count++;
  }

  return count;
}

// To summarize - while loop is better for cases i really don't know what is the range of the loop, and generally if i have just a condition for the code to run