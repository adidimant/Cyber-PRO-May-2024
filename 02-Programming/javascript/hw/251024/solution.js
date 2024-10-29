// #1 question:

const numbers1 = [2, 5, 8, 3];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}

console.log(sum); // Expected Output: 18

//hw2 - Counting Even Numbers

const numbers2 = [1, 4, 6, 9, 10];
let count = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 == 0) {
        count++;
    }
}


console.log(count); // Expected Output: 3

//hw3 - Finding the Maximum Value

const numbers3 = [7, 2, 10, 4, 6];
let largest = numbers3[0];

for (let i = 1; i < numbers3.length; i++) {
    if (numbers3[i] > largest) {
        largest = numbers3[i];
    }
}

console.log(largest); // Expected Output: 10

//#4:

const numbers4 = [1, 2, 3, 4, 5];
const result = new Array(numbers4.length); // [undefined, undefined, undefined, undefined, undefined]

for (let i =0; i < result.length; i++) {
  result[i] = numbers4[numbers4.length -1 -i];
}

// #5 question:

let sum2 = 0;
for (let i =1; i<= 10; i++) {
  if (i % 2 == 1) {
    sum2 += i;
  }
}

console.log(sum2);

// #6 question:

for (let i=0; i<=10; i++) {
  console.log("5 x " + i+ "  =  " + 5*i);
}

// #7 question:

function countCharInString(str, char) {
  let count = 0;
  for (let i=0; i<str.length; i++) {
    if (str.charAt(i) == char) {
      count++;
    }
  }

  return count;
}

const charCount = countCharInString('javascript is awesome', 'a');

// #8 question:

const input = ["Hello", " ", "world", "!"];
let result3 = '';

// btw - this operation is exactly like doing: result3 = input.join();
for (let i =0; i <input.length; i++) {
  result3 += input[i];
}

console.log(result3);

