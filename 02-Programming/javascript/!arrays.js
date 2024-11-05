
const cars = ["Saab", "Volvo", "BMW"];
// or equivalent:
const cars2 = new Array("Saab", "Volvo", "BMW");

let car = cars[0]; // accessing to specific item in the array (by specific index)
cars[0] = "Opel"; // changing an item (in specific index) of the array

const arr1 = [4, 'abc', [5,6,7], { a: 6 }, true]; // javascript arrays can contain different values types together - numbers, booleans, strings, etc

const lastItem = arr[arr.length-1]; // the last index in the array is (arr.length-1)

const firstItem = arr[0];

const arr2 = [];

// check is the array is not empty:
if (arr2.length) { // can be also: if (arr2.length > 0)

}

// check if the type is array AND the array is not empty:
if (Array.isArray(arr2) && arr2.length) {

}

// array can be converted to string by .toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); // 

// chancing an array to a string (with ','), then change it back to the same array using split method: 
["Banana", "Orange", "Apple", "Mango"].toString().split(",")


const points = [40]; // create a new array with 1 item - the number 40

const points2 = ['a', 'b', 'c'];

const arr = [1,2,3];
// Array functions:
arr.length; // the length of the array
arr.join("+"); // returns the string: "1+2+3"

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.join(" * "); // returns "Banana * Orange * Apple * Mango"

// adding or removing an element on an easy way:

arr.push(6); // adding a new item
arr.pop(); // remove the last item in the array => 6 will be removed

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits4.shift(); // removing the first item of the array, and return it!

fruits.unshift("Lemon"); // adds an item to the beginning of the array


// merging two arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // result: ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

// flattening arrays:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // newArr result: [1,2,3,4,5,6]

const myArr2 = [1,[3,4],[5,6]];
const newArr2 = myArr2.flat(); // newArr2 result: [1,3,4,5,6]


const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits5.slice(1); // the result will be: ["Orange", "Lemon", "Apple", "Mango"]

const citrus2 = fruits5.slice(1, 4); // the result will be: ["Orange", "Lemon", "Apple"]

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi"); // result wil be adding two more items before "Apple", but not removing nothing (since specified 0 at the second parameter)

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(2, 1); // result wil be: ["Banana", "Orange", "Mango"]

// NOTE - splice changes the array!!!! but slice() is not changing the original array!


// arr.forEach: for every item in the array (and his index) - executing the delivered function

/* from HW: 7) Write a function that accepts two arrays of numbers, the arrays has both the length 5, the function should return an array that is the sum of the two arrays
arr1: [1,6,4,4,6]
arr2: [2,1,1,3,2]
sum: []
*/
const sum = [];
sum[0] = arr1[0] + arr2[0];
sum[1] = arr1[1] + arr2[1];
sum[2] = arr1[2] + arr2[2];
sum[3] = arr1[3] + arr2[3];
sum[4] = arr1[4] + arr2[4];
console.log(sum); // [3,7,5,7,8]

arr1.forEach((item, index) => {
  console.log(item);
  console.log("item index: ", index);
});

// So how we will solve this problem, that we don't now the length of these arrays, using forEach? This way:
// arr1: [1,6,4,4,6,4]
// arr2: [2,1,1,3,2]
// sum = [3,7,5,7,8,4]

// solution:

let longestArray;
if (arr1.length > arr2.length) {
  longestArray = arr1;
} else {
  longestArray = arr2;
}

const arraysSum = [];

longestArray.forEach((_, index) => {
  arraysSum[index] = arr1[index] + arr2[index];
});

console.log(arraysSum);


/* your goal is to create the body of the html, that every item in the array should be in a div and in the div inside a label. below every div there should be <br /> to get down a row
example:
<div>
<label>
Milk
</label>
</div>
<br />
<div>
<label>
Apple
</label>
</div>
<br />
...etc

for this question use forEach to build the html content
*/
const items = ['Milk', 'Apple', 'Honey', 'Bread', 'Plate'];
let htmlBody = '';

items.forEach((item) => {
  htmlBody += '<div><label>';
  htmlBody += item;
  htmlBody += '</label></div> <br />';
});

document.body.innerHTML = htmlBody;

// and if we want it as async function:

async function abc() {
  const response = await fetch();
  items.forEach((item) => {
    htmlBody += '<div><label>';
    htmlBody += item;
    htmlBody += '</label></div> <br />';
  });
}

await abc();

document.body.innerHTML = htmlBody;


// arr.map(): for every item in the array (and his index) - map it to the returned value in the delivered function. map returns an array of the same size
const numbers = [0,1,2,3,4,5,6];

// converts each number in the array to its sequential number
const afterNumbersArr = numbers.map((number) => {
  return number + 1;
});

console.log(afterNumbersArr); // [1,2,3,4,5,6,7]

// converts each number in the array to its string value
const stringsNumberArr = numbers.map((number) => {
  return number.toString();
});

console.log(stringsNumberArr); // ['0','1','2','3','4','5','6']

// converts each number to 0 - resulting array with the same length with all zeros


// option 1:
const zeroArr = numbers.map((number) => {
  return 0;
});

// option 2 (sergio):
const zeroArr2 = numbers.map((number) => {
  return number - number;
});

// option 3:
const zerosArr3 = numbers.map(() => 0);

//option 4:
function zeroFunction(number) {
  return 0;
}
const zeroArr4 = numbers.map(zeroFunction); // using the zeroFunction here


// given an array of numbers, create an array from the given array, that if the number is positive - the same index wiil be true, otherwise false 
const numbers2 = [4,-3,-2,-2,-5,8,2,-1];
// result array should be: [true, false, false, false, false, true, true, false]

const positivityArr = numbers2.map((number) => {
  if (number > 0) {
    return true;
  }
  return false;
});

// given an array of string, create an array of objects, the key and the value should be the same - the string in the same place in the original array
const stringsArr = ['hey', 'my', 'name', 'is', 'Adi'];
// result should be: [{ hey: 'hey' }, { my: 'my' }, { name: 'name' }, { is: 'is' }, { Adi: 'Adi' }]

const objectsArr = stringsArr.map((str) => {
  const obj = { [str]: str };
  return obj;
});


// given an array of students with full details, provide to the teacher an array contains only full names (using map):
const students = [
  {
    firstName: 'Oren',
    lastName: 'Shemesh',
    birthday: '10/10/2024',
    id: 300002122,
    address: 'Ilan 7, Rehovot',
  },
  {
    firstName: 'Isra',
    lastName: 'Mo',
    birthday: '11/10/2024',
    id: 300002123,
    address: 'Ilan 7, Herzeliya',
  }
];

const studentsFullnames = students.map((student) => {
  return student.firstName + ' ' + student.lastName;
});


// arr.filter(): returns an array filtered from the original array by some condition (transfered as boolean function)
const numbers3 = [1,2,-2,-1,5,-4,4,4,7,-10];
const positiveNumbers = numbers3.filter((number) => {
  if (number > 0) {
    return true;
  }
  return false;
});



