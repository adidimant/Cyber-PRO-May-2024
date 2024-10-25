for (let i = 0; i < 10; i++) {
  // this code inside runs 10 times
}

for (let i = 0; i < arr.length; i++) {
  // this code runs arr.length times
}

// write a loop that prints every item of the array (the items should be printed by the order of the array)
const arr = [1,5,6,8,4,8];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// write a loop that prints this same array in an opposite way
for (let i = arr.length -1; i >= 0; i--) {
  console.log(arr[i]);
}

// write a loop that console every character of a string
const str = 'Hello';
for (let i =0; i<str.length; i++) {
  console.log(str.charAt(i));
}

