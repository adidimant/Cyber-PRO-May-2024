// Create an Object
const car = {type:"Fiat", model:"500", color:"white"};

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person2 = {
  firstName: "Van",
  lastName: "Damme",
  age: 50,
  eyeColor: "black"
};

// Create an Object
const person3 = {};

// Add Properties
person3.firstName = "Jack";
person3.lastName = "Nickolson";
person3.age = 55;
person3.eyeColor = "blue";

console.log(person3);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person3.func());

person3["6ajshdvbausg345"] = 'my-value';
console.log(person3["6ajshdvbausg345"]);

const person4 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person4.fullName());

const x = person;

x.age = 60; // The value of age will be changed to 60 in both x and person

const strObject = JSON.stringify(person);
JSON.parse(strObject); // returns the object from the string


const spider1 = {
  legsCount: 8,
  eyesColor: 'black',
  weight: 0.001,
  width: 0.02,
  height: 0.25,
};

const spider1Keys = Object.keys(spider1);
const spider1Values = Object.values(spider1);