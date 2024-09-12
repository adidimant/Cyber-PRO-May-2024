function calculateAgeDifference(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
    return Math.floor(diffInMilliseconds / millisecondsInYear);
}
const date1 = new Date('1990-01-01');
const date2 = new Date('2024-09-01');
console.log(calculateAgeDifference(date1, date2));  // Output: 34
