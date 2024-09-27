function padStart(arr, maxSize, padValue) {
    // Check if the array length is already greater than or equal to maxSize
    if (arr.length >= maxSize) {
        return arr;
    }
    
    // Calculate how many padding elements are needed
    const paddingSize = maxSize - arr.length;

    // Create an array with the required padding
    const paddingArray = new Array(paddingSize).fill(padValue);

    // Return the concatenation of the padding array and the original array
    return paddingArray.concat(arr);
}

const arr = [3, 4, 5];
const paddedArr = padStart(arr, 6, 1); // Output: [1, 1, 1, 3, 4, 5]
console.log(paddedArr);
