function splitHalf(arr) {
    // Calculate the middle index, using Math.ceil to handle odd-length arrays
    const mid = Math.ceil(arr.length / 2);

    // Split the array into two halves
    const firstHalf = arr.slice(0, mid);    // Elements from the start to the middle
    const secondHalf = arr.slice(mid);      // Elements from the middle to the end

    // Return an array containing both halves
    return [firstHalf, secondHalf];
}

const result = splitHalf([1, 2, 3, 4]);
console.log(result);  // Output: [[1, 2], [3, 4]]

const resultOdd = splitHalf([1, 2, 3, 4, 5]);
console.log(resultOdd);  // Output: [[1, 2, 3], [4, 5]]
