/*
string
number (in python - integer & double/float)
boolean
object
Array
undefined
null
NaN (number)
function
*/

let n = 'hello world!'; // string
let a = 6; // number
let cars = ['Saab', 'Volvo', 'BMW']; // Array
let k = true; // boolean
const obj = { // object
  key1: 6,
  key2: false,
  key3: 'my-value',
  key4: null
};

let p; // undefined
let q = null; // null

typeof n // returns string
typeof a // returns number
typeof cars // will return 'object', which is not accurate - for arrays we will use Array.isArray() check
// instead:
if (Array.isArray(cars)) {
  // do something here
}
typeof k // returns boolean
typeof obj // returns object
typeof p // returns undefined
typeof q // returns object (event if it's null)
// instead:
if(q == null) {
  // do something here
}

isNaN('s1'); // returns true
isNaN(NaN); // returns true
isNaN(false); // returns false, since false can be converted to 0

// a way to check if something is a number:
if (typeof a != 'number') {

}
// note - if you use isNaN(a) - it will consider boolean & null types to numbers

function foo() {
  alert('hey! start calculating');
  let b = 8;
  const c = b**2;
  const d = c+6;
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

typeof foo // returns 'function'
