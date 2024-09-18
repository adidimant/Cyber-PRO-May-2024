function hasRequiredKeys(obj, requiredKeys) {
    // Check if the array has 4 items
    if (requiredKeys.length > 4) {
      throw new Error('Array should not have more than 4 keys.');
    }
  
    // Check if every key in the array is present in the object
    for (let i = 0; i < requiredKeys.length; i++) {
      if (!obj.hasOwnProperty(requiredKeys[i])) {
        return false; // Return false if any key is missing
      }
    }
  
    return true; // Return true if all keys are found
  }
  
  // Example usage
  const myObject = {
    name: 'Oren',
    age: 51,
    city: 'Hod-Hasharon',
    profession: 'Solution Architect'
  };
  
  const requiredKeys = ['name', 'age', 'city', 'profession'];
  
  console.log(hasRequiredKeys(myObject, requiredKeys)); // true
  