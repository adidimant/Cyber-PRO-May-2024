function sumNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return null;
}

//console.log("sumNumbers(5, 10):", sumNumbers(5, 10));
//console.log("sumNumbers('5', 10):", sumNumbers('5', 10));

// Export the function sumNumbers
module.exports = sumNumbers;
