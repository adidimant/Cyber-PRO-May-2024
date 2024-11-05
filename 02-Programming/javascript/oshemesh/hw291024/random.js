//hw 2 - Create a function that return a number in the range of 0 to 100

function getRandomNumber() {
    return Math.floor(Math.random() * 101); //Math.floor(): Rounds down to the nearest integer, resulting in a random integer between 0 and 100 (inclusive).
}

console.log(getRandomNumber()); //This generates a random decimal between 0 (inclusive) and 101 (exclusive), effectively giving a range from 0 to just below 101.


//hw 3 - Create a lottery function, that returns a number in the range of 0 to 6000000

function lotteryNumber() {
    return Math.floor(Math.random() * 6000001);
}

console.log(lotteryNumber()); // A random integer from 0 to 6000000

//hw 4

function countDivisionsByN(n) {
    const randomNum = getRandomNumber(); // Generate a random number between 0 and 100
    console.log("Random number chosen:", randomNum); // Log the random number

    let count = 0;
    let currentNum = randomNum;

    // Count divisions by n until the result is less than 1
    while (currentNum >= 1) {
        currentNum /= n;
        count++;
    }

    return count - 1; // Exclude the last division that drops below 1
}

console.log("Count of divisions:", countDivisionsByN(3)); // Example usage with n = 3
