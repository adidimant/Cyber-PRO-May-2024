function concatStrings(s1, s2) {
    if (typeof s1 === 'string' && typeof s2 === 'string') {
        return `${s1}${s2}${s1}`;
    }
    return null;
}
console.log("concatStrings('Oren', 'Shemesh'):", concatStrings('Oren', 'Shemesh'));
console.log("concatStrings('Oren', 111):", concatStrings('Oren', 111));