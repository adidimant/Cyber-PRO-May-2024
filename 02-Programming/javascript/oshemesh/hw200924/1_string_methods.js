// Step 1: Define first and last name
let firstName = "Oren";
let lastName = "Shemesh";

// Step 2: Use different string methods

// 1. Concatenation using `+`
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName); 

// 2. `concat()` method to add a title
fullName = fullName.concat(", a passionate Solution Architect.");
console.log("Concat a Role to Full Name:", fullName); 

// 3. `toUpperCase()` to capitalize the full sentence
let upperCaseSentence = fullName.toUpperCase();
console.log("Capitalize the full sentence:", upperCaseSentence); 

// 4. `replace()` method to modify the sentence
let updatedSentence = upperCaseSentence.replace("PASSIONATE", "DEDICATED");

// 5. `slice()` method to grab the first name only
let firstNameOnly = updatedSentence.slice(0, updatedSentence.indexOf(" "));

// 6. `trim()` method to remove any extra spaces (for demonstration)
let finalSentence = updatedSentence.trim();

console.log(finalSentence); // Output: OREN SHEMESH, A DEDICATED SOLUTION ARCHITECT.
console.log("First name only:", firstNameOnly); // Output: OREN
