//hw1 - Sum of Numbers in an Array

const numbers1 = [2, 5, 8, 3];
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}

console.log(sum); // Expected Output: 18

// Implement While Loop for hw1
let sum2 =0;
let index =0;

while(index < numbers1.length) {
    sum2 += numbers1[index++];
}

console.log(sum2); // Expected Output: 18

//hw2 - Counting Even Numbers

const numbers2 = [1, 4, 6, 9, 10];
let count = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 == 0) {
        count++;
    }
}

console.log(count); // Expected Output: 3

// Implement While Loop for hw2
index = 0;
count = 0;
while(index < numbers2.length) {
    if (numbers2[index++] % 2 == 0) {
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


// Implement While Loop for hw3
index = 0;
largest = numbers3[0];
while(index < numbers3.length) {
    if (numbers3[index] > largest) {
        largest = numbers3[index];
    }
    index++;
}

console.log(largest); // Expected Output: 10


//hw4 - Reverse an Array
let numbers4 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = 0; i < numbers4.length; i++) {
    reversed[numbers4.length - 1 - i] = numbers4[i];
}

console.log(reversed); // Expected Output: [5, 4, 3, 2, 1]

// Implement While Loop for hw4
index = 0;
reversed = [];
while(index < numbers4.length) {
    reversed[numbers4.length - 1 - index] = numbers4[index];
    index++;
}

console.log(reversed); // Expected Output: [5, 4, 3, 2, 1]
