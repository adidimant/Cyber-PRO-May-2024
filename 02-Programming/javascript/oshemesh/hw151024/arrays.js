//hw #1
const items = ['Milk', 'Apple', 'Honey', 'Bread', 'Plate'];

//map: Transforms each item in the items array into the desired HTML string, wrapping the item in a <div> and a <label>, followed by <br />.
const htmlBody = items.map(item => 
  `<div><label>${item}</label></div> <br />`
).join(''); //Combines all the HTML strings into one big string without any separators.

console.log("htmlBody: " + htmlBody);

//hw #2
function convertToNumbers(stringNumbers) {
    return stringNumbers.map(str => Number(str));
  }
  
  // Example usage:
  const stringNumbers = ['1', '2', '3', '4', '5'];
  const number = convertToNumbers(stringNumbers);
  
  console.log("convertToNumbers: " + number);  // Output: [1, 2, 3, 4, 5]
  

  //hw #3
  function convertBooleansToNumbers(booleanArray) {
    return booleanArray.map(value => value ? 1 : 0);
  }
  
  // Example usage:
  const booleans = [true, false, true, true, false];
  const numbers = convertBooleansToNumbers(booleans);
  
  console.log("convertBooleansToNum: " + numbers); // Output: [1, 0, 1, 1, 0]
  
  //hw #4
  function logEachCharacter(str) {
    str.split('').forEach(char => console.log(char)); //the separator is an empty string '' for splitting between each character.
  }
  
  // Example usage:
  logEachCharacter("Oren Shemesh");
  
  //hw5
  function mapPasswordsToObject(passwords) {
    const result = {}; // initializes an empty object result.
    
    passwords.forEach((password, index) => {
      result[index] = password;
    });
  
    return result;
  }
  
  // Example usage:
  const passwords = ['abc123', 'password', 'pwd', '!q2w#e4r'];
  const passwordObject = mapPasswordsToObject(passwords);
  
  console.log(passwordObject);
  // Output: { 0: 'abc123', 1: 'password', 2: 'pwd', 3: '!q2w#e4r' }
  
  //hw6
  function filterShortNames(names) {
    return names.filter(name => name.length <= 5);
  }
    
  // Example usage:
  const names = ['Oren', 'Shemesh', 'Charlie', 'Dave', 'Bob', 'Frank'];
  const shortNames = filterShortNames(names);
  
  console.log(shortNames); // Output: ['Oren', 'Dave', 'Bob', 'Frank']
  
  //hw7
  function filterNumbers(array) {
    return array.filter(item => typeof item === 'number');
  }
  
  // Example usage:
  const mixedArray = [1, 'hello', true, 3.14, null, '42', 7, undefined, {}, []];
  const Numbers = filterNumbers(mixedArray);
  
  console.log(Numbers); // Output: [1, 3.14, 7]
  
  //hw8
  function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0); /* The % operator returns the remainder of a division operation between two numbers. */
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbersArray);
  
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  