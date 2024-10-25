/*

1) Look at the forEach example from the class (!arrays.js file).
Using map & join - create an html string for the html body - without using forEach.
You should get the same results.

*/

const items = ['Milk', 'Apple', 'Honey', 'Bread', 'Plate'];

//map: Transforms each item in the items array into the desired HTML string, wrapping the item in a <div> and a <label>, followed by <br />.
const htmlBody = items.map(item => 
  `<div><label>${item}</label></div> <br />`
).join(''); //Combines all the HTML strings into one big string without any separators.

console.log("htmlBody: " + htmlBody);

/*
2) write a function that gets an array of string numbers, and returns an array of this numbers as numbers (using map)
*/

const input = ['3', '100', '37', '95', '8'];
// result should be: [3, 100, 37, 95, 8]

const result = input.map((strNumber) => {
  return parseInt(strNumber);
});

/*
3) write a function that gets an array of boolean values, and returns an array of 1/0. if the item in the original array was true - then the same place in the result array should be 1, otherwise - 0.
*/

const input2 = [true,true,false,false,false,false,true,true,true,false];
// result should be: [1,1,0,0,0,0,1,1,1,0]

const result2 = input2.map((value) => {
  if (value) {
    return 1;
  }
  return 0;
});

/*
4) write a function that gets a string, and for every character in the string - console.log it.
you should do it with arr.forEach function (on array!)
example:

'Danny'.split('')
['D', 'a', 'n', 'n', 'y']
*/
const input3 = 'Danny';

input3.split('').forEach((char) => {
  console.log(char);
});

/*
5) write a function that gets an array of passwords, and returns an object which every key is the index, and every value is the password. you should use forEach function.
*/

const passwords = ['abc', 'nnnn', '123456', 'iopiop', '11Liav11', '86Maayan12'];

function convertPasswordsToObject(passwordsArr) {
  const result = {};

  passwordsArr.forEach((password, index) => {
    result[index] = password;
  });

  return result;
}

const passwordsObj = convertPasswordsToObject(passwords);

/*
6) given an array of names (strings), filter all the short names (short names have maximum 5 letters)
*/

const input4 = ['Anastasya', 'Yossi', 'Ilan', 'Adam', 'Synwar', 'Ran', 'Sergio'];

const result4 = input.filter((name) => {
  if (name.length <=5) {
    return true;
  }

  return false;
});

/*
  7) given an array of anything - filter only the numbers
*/

