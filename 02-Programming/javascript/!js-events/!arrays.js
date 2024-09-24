
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

