function secondLargest(arr) {
    // First, remove any duplicate values by creating a Set
    //Convert an Array to a Set
    const uniqueSet = new Set(arr);
    
    //Then convert it back to an array
    const uniqueArr = Array.from(uniqueSet);
    
    // Check if there are fewer than 2 unique elements, return null (no second largest element exists)
    if (uniqueArr.length < 2) {
        return null;
    }

    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Return the second largest element
    return uniqueArr[1];
}

// Example usage:
const arr = [5, 1, 4, 2, 4, 5];
const result = secondLargest(arr); // Output: 4
console.log(result);
