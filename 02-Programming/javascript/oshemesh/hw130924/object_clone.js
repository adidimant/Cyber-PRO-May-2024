// Original object
const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

// Copy the original object using spread operator
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

// Copy the original object using Object.assign()
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

// Copy the original object using JSON.stringify() and JSON.parse()
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