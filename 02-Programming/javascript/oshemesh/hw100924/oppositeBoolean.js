function oppositeBoolean(value) {
    if (value === true || value === false) {
        return !value;
    }
    return null;
}
console.log("oppositeBoolean(true):", oppositeBoolean(true));
console.log("oppositeBoolean(false):", oppositeBoolean(false));