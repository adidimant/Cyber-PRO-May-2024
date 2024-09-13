// 1) this is your object:
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// create a copy for person to a new variable

// play with the object, add at least 3 properties (keys), and edit at least 2 properties

// console.log() both object in the browser console - see the difference between the objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const personCopy = { ...person };

personCopy.job = "Vulnerability Analyst";
personCopy.address = "Even Yehuda";
personCopy.birthDay = "06/10/2001";
personCopy.age = "22";
personCopy.eyeColor = "brown";

// 2) create a `utils` object, the object keys will be the name of the functions from last hw
// the value of these keys will be the actual functions.
// then use this utils object in order to use the functions

// include in the object the function that converts celsius to farenigeht temprature and other function that does the opposite

const utils = {
  alwaysTrue() {
    return true;
  },
  trueOrFalse(value) {
    return typeof value == "boolean" ? !value : null;
  },
  sum(num1, num2) {
    return typeof num1 == "number" && typeof num2 == "number"
      ? num1 + num2
      : null;
  },
  checkStrings(s1, s2) {
    return typeof s1 == "string" && typeof s2 == "string" ? s1 + s2 + s1 : null;
  },
  getType(value) {
    if (value == null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  },
  ageDifference(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return null;

    const yearDiff = date2.getFullYear() - date1.getFullYear();
    const monthDiff = date2.getMonth() - date1.getMonth();
    const dayDiff = date2.getDate() - date1.getDate();

    let ageDiff = "";
    if (yearDiff !== 0) ageDiff += " " + Math.abs(yearDiff) + " Years";
    if (monthDiff !== 0) ageDiff += " " + Math.abs(monthDiff) + " Months";
    if (dayDiff !== 0) ageDiff += " " + Math.abs(dayDiff) + " Days difference";

    return ageDiff || "No difference";
  },
  celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
  fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
};

// 3) create a function that gets a url as a parameter
// checks if the hostname of the url in the website you stay now is the same hostname of the url
// if yes - does nothing
// if not - redirect to the new url

function urlCheck(url) {
  if (new URL(url).hostname !== window.location.hostname)
    window.location.href = url;
}

// 4) create function that gets two parameters:
//  - object with any keys you would like (lets say at least 4 keys)
//  - array of strings, that represents the required keys to be in the object
//  the function should check if the object contains all the keys in the array
//  the function return true/false

//  two levels of hardndess:
//  1) solve the question with: the array has maximum of 4 items
//  2) solve the question with: the array has unknown number of items

function checkObjHasKeys(obj, arrayOfStrings) {
  return arrayOfStrings.every((key) => key in obj);
}

//TESTERS
console.log(person);

console.log("-------------------");

console.log(personCopy);

console.log("-------------------");

console.log(utils.celsiusToFahrenheit(45));
console.log(utils.fahrenheitToCelsius(45));

console.log("-------------------");

const keys = ["job", "address", "birthDay", "age", "eyeColor"];

console.log(checkObjHasKeys(personCopy, keys));
