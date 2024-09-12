// 1) write a function that returns always true

function alwaysTrue() {
  return true;
}

// 2) write a function that gets true or false, checks if really got true/false, then returns the opposite. else - return null

function trueOrFalse(value) {
  return typeof value == "boolean" ? !value : null;
}

// 3) write a sum function: gets two numbers, check if two of them are really numbers, if so - return the sum of the numbers, else - return null

function sum(num1, num2) {
  return typeof num1 == "number" && typeof num2 == "number"
    ? num1 + num2
    : null;
}

// 4) write a function that accepts two strings s1 & s2, check if two of them are really strings, if so - return '<s1><s2><s1>', else - return null

function checkStrings(s1, s2) {
  return typeof s1 == "string" && typeof s2 == "string" ? s1 + s2 + s1 : null;
}

// 5) write a function that gets anything - and return it's type. NOTE - you should support arrays and null as well, it means if the function got an array - it should return 'array' and if got null value it should return 'null'

function getType(value) {
  if (value == null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

// 6) write a javascript function (in a .js file) that accepts two dates and calculates their age difference.

function ageDifference(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) return null;

  const yearDiff = date2.getFullYear() - date1.getFullYear();
  const monthDiff = date2.getMonth() - date1.getMonth();
  const dayDiff = date2.getDate() - date1.getDate();

  let ageDiff = "";
  if (yearDiff !== 0) ageDiff += " " + Math.abs(yearDiff) + " Years";
  if (monthDiff !== 0) ageDiff += " " + Math.abs(monthDiff) + " Months";
  if (dayDiff !== 0) ageDiff += " " + Math.abs(dayDiff) + " Days difference";

  return ageDiff || "No difference";
}

//TESTERS

// console.log("--------------------");

// console.log("alwaysTrue function:");
// console.log(alwaysTrue(), "alwaysTrue()");

// console.log("--------------------");

// console.log("trueOrFalse function:");
// console.log(trueOrFalse(true), "trueOrFalse(true)");
// console.log(trueOrFalse(false), "trueOrFalse(false)");

// console.log("--------------------");

// console.log("sum function:");
// console.log(sum(1, 2), "- sum(1, 2)");
// console.log(sum(2, "t"), "- sum(2, t)");
// console.log(sum("t", "t"), "- sum(t, t)");

// console.log("--------------------");

// console.log("CheckStrings function:");
// console.log(
//   checkStrings("hello ", "world "),
//   "- checkStrings('hello ', 'world '"
// );
// console.log(checkStrings(2, 1), "- checkStrings(2, 1");

// console.log("--------------------");

// console.log("getType function:");
// console.log(getType("hello "), "- getType('hello ')");
// console.log(getType([1, 2, 3]), "- getType([1, 2, 3])");
// console.log(getType(1), "- getType(1)");
// console.log(getType(true), "- getType(true)");
// console.log(getType(null), "- getType(null)");
// console.log(getType({ name: "value" }), "- getType({ name: 'value' })");

// console.log("--------------------");

// console.log("ageDifference function:");

// Date(Year/Month/Day)

// const date1 = new Date("2000-01-01");
// const date2 = new Date("1999-01-01");
// const date3 = new Date("2001-10-06");
// const date4 = new Date("2001-11-06");
// const date5 = new Date("2001-11-07");

// console.log(ageDifference(date1, date2), "- ageDifference(2000, 1999)");
// console.log(ageDifference(date1, date1), "- ageDifference(2000, 2000)");
// console.log(ageDifference(date1, date3), "- ageDifference(2000, 2001)");
// console.log(ageDifference(date2, date3), "- ageDifference(1999, 2001)");
// console.log(ageDifference(date2, date3), "- ageDifference(1999, 2001)");
// console.log(ageDifference(date4, date3), "- ageDifference(2001, 2001)");
// console.log(ageDifference(date4, date5), "- ageDifference(2001, 2001)");
// console.log(ageDifference("hello", date2), "ageDifference('hello', 1999)");
