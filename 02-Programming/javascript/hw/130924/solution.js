/*
1) this is your object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

create a copy for person to a new variable

play with the object, add at least 3 properties (keys), and edit at least 2 properties

console.log() both object in the browser console - see the difference between the objects
*/

// Original object
const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

// 1 way - Copy the original object using spread operator
const personCopy = {...person};

// Add new properties and edit existing ones in the copy
personCopy.middleName = "Shemesh";  // Adding new property
personCopy.occupation = "Solution Architect";  // Adding new property
personCopy.country = "Israel";  // Adding new property
personCopy.age = 51;  // Editing existing property
personCopy.eyeColor = "brown";  // Editing existing property

// Log both objects to see the difference
console.log("Original person object:", person);
console.log("Modified copy of person object:", personCopy);

// 2nd way - Copy the original object using Object.assign()
const personCopy2 = Object.assign({}, person);

// Add new properties and edit existing ones in the copy
personCopy2.middleName = "Shemesh";  // Adding new property
personCopy2.occupation = "Solution Architect";  // Adding new property
personCopy2.country = "Israel";  // Adding new property
personCopy2.age = 55;  // Editing existing property
personCopy2.eyeColor = "light-brown";  // Editing existing property

// Log both objects to see the difference
console.log("Original person object:", person);
console.log("Modified copy of person object:", personCopy2);

// 3rd way - Copy the original object using JSON.stringify() and JSON.parse()
const personCopy3 = JSON.parse(JSON.stringify(person));

// Add new properties and edit existing ones in the copy
personCopy3.middleName = "Shemesh";  // Adding new property
personCopy3.occupation = "Solution Architect";  // Adding new property
personCopy3.country = "Israel";  // Adding new property
personCopy3.age = 60;  // Editing existing property
personCopy3.eyeColor = "grenn";  // Editing existing property

// Log both objects to see the difference
console.log("Original person object:", person);
console.log("Modified copy of person object:", personCopy3);

/*
2) create a `utils` object, the object keys will be the name of the functions from last hw
the value of these keys will be the actual functions.
then use this utils object in order to use the functions

include in the object the function that converts celsius to farenigeht temprature and other function that does the opposite

const utils = {
  myTrueFunc: function () {

  }
}

*/

const utils = {
  myTrueFunc: function () {
    return 12 > 11;
  },
  myOppositeFunc: function (value) {
    if (typeof value == 'boolean') {
      return !value;
    } 
    return null;
  },
  checkSum: function (num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
      return num1 + num2;
    }
    return null;
  },
  stringsBuilderFunc: function (s1, s2) {
    if (typeof s1 == 'string' && typeof s2 == 'string') {
      return s1 + s2 + s1;
    }
    return null;
  },
  typeofExtended: function (value) {
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
  },
  getAgeDifference: function (date1, date2) {
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
  },
  celsiusToFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },
  fahrenheitToCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
}

const ageDifference = utils.getAgeDifference(new Date('02/02/1990'), new Date('01/01/1999'));


/*
3) create a function that gets a url as a parameter (string)
checks if the hostname of the url in the website you stay now is the same hostname of the url
if yes - does nothing
if not - redirect to the new url
*/

// option 1:

function checkAndRedirect(url) {
  const newUrl = new URL(url);

  const currentHostname = window.location.host;

  if (newUrl.host!==currentHostname) {
    window.location.href = url;
  }
}  

// option 2:
function checkAndRedirect_v2(url) {
  const currentHostname = window.location.host;

  if (!url.includes(currentHostname)) {
    window.location.href = url;
  }
}

"abcabc".includes("ab")


/*
  4) create function that gets two parameters:
  - object with any keys you would like (lets say at least 4 keys)
  - array of strings, that represents the required keys to be in the object
  the function should check if the object contains all the keys in the array
  the function return true/false

  two levels of hardndess:
  1) solve the question with: the array has maximum of 4 items
  2) solve the question with: the array has unknown number of items
*/

// 1) level 1 of hardness:
// requiredKeys examples: 1) ['email', 'firstName', 'lastName', null],    2) ['email', null, null, null]
function validateObject(obj, requiredKeys) {
  if (typeof obj != 'object' || !Array.isArray(requiredKeys) || requiredKeys.length != 4) {
    return null;
  }

  if (requiredKeys[0] && !(requiredKeys[0] in obj)) {
    return false;
  }

  if (requiredKeys[1] && !(requiredKeys[1] in obj)) {
    return false;
  }

  if (requiredKeys[2] && !(requiredKeys[2] in obj)) {
    return false;
  }

  if (requiredKeys[3] && !(requiredKeys[3] in obj)) {
    return false;
  }

  return true;
}

// level1 - using Object.key(obj):
function validateObject_v2(obj, requiredKeys) {
  if (typeof obj != 'object' || !Array.isArray(requiredKeys) || requiredKeys.length != 4) {
    return null;
  }

  const keys = Object.keys(obj); // looks like: ['firstName', 'lastName', 'email', 'phone', 'address', 'zipcode', 'birthday']

  if (requiredKeys[0] && !keys.includes(requiredKeys[0])) {
    return false;
  }

  if (requiredKeys[1] && !keys.includes(requiredKeys[1])) {
    return false;
  }

  if (requiredKeys[2] && !keys.includes(requiredKeys[2])) {
    return false;
  }

  if (requiredKeys[3] && !keys.includes(requiredKeys[3])) {
    return false;
  }

  return true;
}

