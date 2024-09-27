const arr1 = [6,7,8,9];
arr1.indexOf(7); // 1

const arr2 = [1,2,4,5,2];

arr2.indexOf(4); // returns the index of the item, if not exist in the array - returns -1

function searchInArray(arr, value) {
  if (arr.indexOf(value) > -1) {
    return true;
  }

  return false;
}

// lastIndexOf - returns the last index of the item in the array, returns -1 if not exist in the array
arr2.lastIndexOf(2); // returns 4 in this case

const arr3 = ["Banana", "Apple", "Watermelon", "Pear"];

// includes - returns true/false
arr3.includes("Apple"); // returns true

if (arr3.includes("White")) {
  console.log("White");
} else {
  console.log("Black");
}
// the code above prints: "Black"

const foundItem = arr3.find((item) => {
  if (item.length > 8) { 
    return true;
  }
  return false;
});
// foundItem => "Watermelon"

const foundIndex = arr3.findIndex((item) => {
  if (item.length > 8) { 
    return true;
  }
  return false;
});
// foundIndex => 2

const foundItem2 = arr3.findLast((item) => {
  if (item.length > 3) { 
    return true;
  }
  return false;
});
// foundItem2 => "Pear"

const foundItem2Index = arr3.findLastIndex((item) => {
  if (item.length > 3) { 
    return true;
  }
  return false;
});
// foundItem2Index => 3



