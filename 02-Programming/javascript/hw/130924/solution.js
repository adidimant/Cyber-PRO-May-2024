// 1) write a function that returns always true :

function myTrueFunc() {
  return 12 > 11;
  // or another option - just: `return true;`
}

// 2) write a function that gets true of false, checks if really got true/false, then returns the opposite. else - return null

function myOppositeFunc(value) {
  if (typeof value == 'boolean') {
    return !value;
  } 
  return null;
}

// 3) write a sum function: gets two numbers, check if two of them are really numbers, if so - return the sum of the numbers, else - return null

function checkSum(num1, num2) {
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    return num1 + num2;
  }
  return null;
}

// 4) write a function that accepts two strings s1 & s2, check if two of them are really strings, if so - return '<s1><s2><s1>', else - return null

function stringsBuilderFunc(s1, s2) {
  if (typeof s1 == 'string' && typeof s2 == 'string') {
    return s1 + s2 + s1;
  }
  return null;
}

stringsBuilderFunc('%', 'i like carrots');
// %i like carrots%

// 5) write a function that gets anything - and return it's type. NOTE - you should support arrays and null as well, it means if the function got an array - it should return 'array' and if got null value it should return 'null'
// will check first the unsupported types (array, null, NaN), then if it's not one of them - `return typeof value;`
function typeofExtended(value) {
  if (Array.isArray(value)) {
    return 'array';
  }

  if (value == null) {
    return 'null';
  }

  if (isNaN(value)) {
    return 'NaN';
  }

  return typeof value;
}

// 6) write a javascript function (in a .js file) that accepts two dates and calculates their age difference.

// new Date("10/07/2024")
// timestamp - how many milliseconds passed since the 0 zime
function getAgeDifference(date1, date2) {
  const t1 = date1.getTime(); // will return date1 timestamp
  const t2 = date2.getTime(); // will return date2 timestamp

  let differenceInMs;

  if (t1 > t2) {
    differenceInMs = t1 - t2;
  } else {
    differenceInMs = t2 - t1;
  }
  // or we can instead: const `difference = Math.abs(t1-t2);`

  const ageDifference = differenceInMs / 1000 / 60 / 60 / 24 / 365;
  return ageDifference;
}


function myFunction(p1, p2) {
  return p1 * p2;
}