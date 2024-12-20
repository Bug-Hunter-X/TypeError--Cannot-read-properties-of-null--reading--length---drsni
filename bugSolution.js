function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, and non-array/string cases
  }
  return x.length; 
}
//Further checks could be added such as checking that x is an array or string.