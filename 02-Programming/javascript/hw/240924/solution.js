/*
1) Write your own implementation for padStart function on arrays - the function should get: 1) an array, 2) what's the maximum size of the array should be, 3) which value to pad - the function returns the array with a padding at the beginning of what you wrote.

2) write a function that gets number array and finds the second largest element in the array.
hint: use the sort() function

3) write a function that gets one array and splits it to a half, the function should return a new array that the first item is halfarray, the second item is the another half array. example: splitHalf([1,2,3,4]) => [[1,2],[3,4]]

4) write a function that gets two number arrays and check if the arrays are equal.
hint: you can use JSON.stringify()

5) write a function that gets an array of numbers and check if all the items are unique (no duplicates in the arrays) - the function should return a boolean value - true/false

6) write a function called "removeAt" - that gets an array, gets an index to remove - and returned a new array - but without the item that needed to remove. NOTE - you should not change the original array! using just splice on the original array will change it!

7) Write a function that accepts two arrays of numbers, the arrays has both the length 5, the function should return an array that is the sum of the two arrays
*/

// 1)
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

// another solution:
function padStart2(arr, maxSize, padValue) {
  if (arr.length >= maxSize) {
    return arr;
  }

  // Calculate how many padding elements are needed
  const paddingSize = maxSize - arr.length;
  
  const strArr = arr.join(); // "3,4,5"
  const paddingStr = (padValue + ",").repeat(paddingSize); // "1,1,1,"

  const unifiedStr = paddingStr + strArr; // "1,1,1,3,4,5"

  const middleResult = unifiedStr.split(","); // ["1","1","1","3","4","5"]

  return middleResult.map((item) => {
    if (!isNaN(item) && typeof item == 'string') {
      return parseInt(item);
    }
    return item;
  }); // returns [1,1,1,3,4,5]
}

// 2:
// assuming the array contains only numbers
function getSecondLargetItem(arr) {
  if (arr.length < 2) {
    return null; // the length of the array is 0 or 1 => there's no second largest item => returning null
  }

  const sortedArray = arr.sort(); // sorts the array from small to big
  return sortedArray[sortedArray.length - 2];
}

// [5,4,7,2,1]
// [5,4,7,2,1].sort() => [1,2,4,5,7][arr.length-2] => 5


// [4,5,6].length => 3, lastIndex: 2

// 3:

// example: splitHalf([1,2,3,4]) => [[1,2],[3,4]]
function splitHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  const firstArr = arr.slice(0, middleIndex);
  const secondArr = arr.slice(middleIndex);

  return [firstArr, secondArr];
}

// 4:
// returns true if both arrays are equal, false if both arrays aren't equal. if some of them isn't array - return null
function compareTwoArrays(arr1,arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }

  const arr1Str = JSON.stringify(arr1);
  const arr2Str = JSON.stringify(arr2);

  return arr1Str == arr2Str;
}

// 5:

function areAllUnique(arr){
  const uniqueSet = new Set(arr);

  if (arr.length === uniqueSet.size){
   return true;
  }
  return false;
  // or also we can:  return arry.length === uniqueSet.size;
}

// 6:

function removeAt(arr, index) {
  const copyArr = JSON.parse(JSON.stringify(arr));
  copyArr.splice(index, 1);
  return copyArr;
}

function removeAt2(arr, index) {
  const firstPart = arr.slice(0, index);
  const secondPart = arr.slice(index + 1);

  return firstPart.concat(secondPart);
}

// 7:

// both arr1 & arr2 has length of 5, returns a new array that is the sum of both
function sumArrays(arr1,arr2) {
  const arr = [];

  arr.push(arr1[0] + arr2[0]);
  arr.push(arr1[1] + arr2[1]);
  arr.push(arr1[2] + arr2[2]);
  arr.push(arr1[3] + arr2[3]);
  arr.push(arr1[4] + arr2[4]);

  return arr;
}
