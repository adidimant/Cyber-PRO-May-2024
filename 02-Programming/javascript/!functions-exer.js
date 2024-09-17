function increment(num) {
  if (typeof num == 'number') {
    return num + 1;
  }
  return null;
}

const c = increment(5);
// the value of c - 6

/* Important note - if the function doesn't return anything - it will return undefined
example of a problematic funciton that returns undefined if c <=80,
then when we check if isResultSuccess is not false - we don't consider it may be undefined:
*/

function isUserSafe() {
  let a = 8;
  let b=a**7;
  let c = b**2;
  if (c > 80) {
    return true;
  }
}

const isResultSuccess = isUserSafe();
if (isResultSuccess != false) {
  // promote user to credit card stage
}

// Accessing a function with incorrect parameters can return an incorrect answer:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();

// Accessing a function without () returns the function and not the function result:
// value2 became the function as well, now we can call it also from toCelsius(77), and from value(77) 

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value2 = toCelsius;

// Export toCelsius function
module.exports = toCelsius;