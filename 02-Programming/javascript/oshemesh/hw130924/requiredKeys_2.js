function hasRequiredKeys(obj, requiredKeys) {
    // Use Array's every method to check if all required keys are in the object
    return requiredKeys.every(key => obj.hasOwnProperty(key));
  }
  
  // Example usage
  const myObject = {
    name: 'John',
    age: 25,
    city: 'New York',
    profession: 'Developer',
    country: 'USA'
  };
  
  const requiredKeys = ['name', 'age', 'city', 'profession'];
  
  console.log(hasRequiredKeys(myObject, requiredKeys)); // true
  