function increment(num) {
  if (typeof num == 'number') {
    return num + 1;
  }
  return null;
}

const c = increment(5);
// the value of c - 6

// Important note - if the function doesn't return anything - it will return undefined

