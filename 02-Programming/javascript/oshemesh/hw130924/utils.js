const getType = require('../hw100924/getType');
const sumNumbers = require('../hw100924/sumNumbers');
const alwaysTrue = require('../hw100924/alwaysTrue');
const oppositeBoolean = require('../hw100924/oppositeBoolean');
const toCelsius = require('../../!functions-exer');

console.log("Typeof getType: ", typeof getType); // This should print 'function' if it's being imported correctly
console.log("Typeof sumNumbers: ", typeof sumNumbers); // This should print 'function' if it's being imported correctly
console.log("Typeof alwaysTrue: ", typeof alwaysTrue); // This should print 'function' if it's being imported correctly
console.log("Typeof oppositeBoolean: ", typeof oppositeBoolean); // This should print 'function' if it's being imported correctly
console.log("Typeof toCelsius: ", typeof toCelsius); // This should print 'function' if it's being imported correctly

const utils = {
  getType,
  sumNumbers,
  alwaysTrue,
  oppositeBoolean,
  toCelsius   
  };
  

// Use getType from utils
console.log("Type of null:", utils.getType(null)); // Output: 'null'
console.log("Type of array:", utils.getType([1, 2, 3])); // Output: 'array'
console.log("Type of 51:", utils.getType(51)); // Output: 'number'
console.log("Type of 'Oren':", utils.getType('Oren')); // Output: 'string'
console.log("Type of object:", utils.getType({})); // Output: 'object'

// Use sumNumbers from utils
console.log("Sum of 2 and 4:", utils.sumNumbers(2, 4)); // Output: 8
console.log("Sum of 20 and '5' (invalid):", utils.sumNumbers(20, '5')); // Output: null

// Use alwaysTrue from utils
console.log("alwaysTrue():", utils.alwaysTrue());

// Use oppositeBoolean from utils
console.log("oppositeBoolean(true):", utils.oppositeBoolean(true));
console.log("oppositeBoolean(false):", utils.oppositeBoolean(false));


// Use toCelsius from utils
console.log("toCelsius(32):", utils.toCelsius(32));