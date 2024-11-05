//hw1 - Sum of Numbers in an Array

let numbers1 = [2, 5, 8, 3];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}

console.log(sum); // Expected Output: 18

//hw2 - Counting Even Numbers

let numbers2 = [1, 4, 6, 9, 10];
let count = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 == 0) {
        count++;
    }
}

console.log(count); // Expected Output: 3

//hw3 - Finding the Maximum Value

let numbers3 = [7, 2, 10, 4, 6];
let largest = numbers3[0];

for (let i = 1; i < numbers3.length; i++) {
    if (numbers3[i] > largest) {
        largest = numbers3[i];
    }
}

console.log(largest); // Expected Output: 10

//hw4 - Reverse an Array
let numbers4 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = 0; i < numbers4.length; i++) {
    reversed[numbers4.length - 1 - i] = numbers4[i];
}

console.log(reversed); // Expected Output: [5, 4, 3, 2, 1]

//hw5 - Sum of Odd Numbers in a Range
let Sum = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        Sum += i;
    }
}

console.log(Sum); // Expected Output: 25

//hw6 - Multiplication Table
let number5 = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number5} x ${i} = ${number5 * i}`);
}

//hw7 - Count Characters in a String

function countCharacters(str, charToCount) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToCount) {
            count++;
        }
    }

    return count;
}

// Example usage
let string = "javascript is awesome";
let character = "a";
let result = countCharacters(string, character);
console.log(result); // Expected Output: 3


//hw8 - Concatenate Array Elements
let array = ["Hello", " ", "world", "!"];
let concatenatedString = "";

for (let i = 0; i < array.length; i++) {
    concatenatedString += array[i];
}

console.log(concatenatedString); // Expected Output: "Hello world!"
