// 1 function that returns always true
function AlwaysT() {
  return true;
}

// 2 write a function that gets true or false, checks if really got true/false, then returns the opposite. else - return null
function TrueOr(x) {
  if (typeof x === "boolean") {
      return !x;
  }
  return null;
}

// 3 write a sum function: gets two numbers, check if two of them are really numbers, if so - return the sum of the numbers, else - return null
function CheckToF(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
  }
  return null;
}

// 4 write a function that accepts two strings s1 & s2, check if two of them are really strings, if so - return '<s1><s2><s1>', else - return null
function CheckString(s1, s2) {
  if (typeof s1 === "string" && typeof s2 === "string") {
      return `<${s1}><${s2}><${s1}>`;
  }
  return null;
}

// 5 write a function that gets anything - and return its type. NOTE - support arrays and null as well
function getType(value) {
  if (Array.isArray(value)) {
      return 'array';
  }
  if (value === null) {
      return 'null';
  }
  return typeof value;
}

// 6 write a function that accepts two dates and calculates their age difference
function AgeDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  let yearDiff = d2.getFullYear() - d1.getFullYear();
  let monthDiff = d2.getMonth() - d1.getMonth();
  let dayDiff = d2.getDate() - d1.getDate();

  // Adjust year difference if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
  }

  return yearDiff;
}

// check
// 1
console.log(AlwaysT());  // true

// 2
console.log(TrueOr(true));    // false
console.log(TrueOr(false));   // true
console.log(TrueOr(5));       // null
console.log(TrueOr('hello')); // null

// 3
console.log(CheckToF(3, 4));          // 7
console.log(CheckToF(10, 'yes'));     // null

// 4
console.log(CheckString('esraa', 'good'));  // "<esraa><good><esraa>"
console.log(CheckString('dhfs', 123));      // null

// 5
console.log(getType([1, 1, 1]));  // 'array'
console.log(getType(null));       // 'null'
console.log(getType(11));         // 'number'

// 6
const date1 = '2000-1-1';  
const date2 = '2024-09-11';  
console.log(AgeDifference(date1, date2));  // 24
