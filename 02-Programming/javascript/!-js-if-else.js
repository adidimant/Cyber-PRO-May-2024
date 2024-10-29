if ('abc'.length > 3) {
  // this code will never run:
  console.log("never running code");
}

if ('abcd'.length > 3) {
  // this code will run:
  console.log("running code");
}

const a = 7;

if (typeof a == 'string') {
  console.log('a is string');
} else if (typeof a == 'object') {
  console.log('a is object');
} else if (typeof a == 'boolean') {
  console.log('a is boolean');
} else if (typeof a == 'function') {
  console.log('a is function');
} else if (typeof a == 'undefined') {
  console.log('a is undefined');
} else if (typeof a == 'number') {
  console.log('a is number');
} else {
  console.log('a is other...');
}

