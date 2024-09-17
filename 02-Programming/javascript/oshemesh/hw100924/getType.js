function getType(input) {
    if (input === null) {
        return 'null';
    } else if (Array.isArray(input)) {
        return 'array';
    } else {
        return typeof input;
    }
}

//console.log(getType(null));        // Output: 'null'
//console.log(getType([1, 2, 3]));   // Output: 'array'
//console.log(getType(51));          // Output: 'number'
//console.log(getType('Oren'));     // Output: 'string'
//console.log(getType({}));          // Output: 'object'


// Export the function getType
module.exports = getType;
