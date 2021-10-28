// Solution from the book

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(33));      // false 
console.log(isNotANumber("bob"));   // false
console.log(isNotANumber('33'));    // false
console.log(isNotANumber([1, 5]));  // false
console.log(isNotANumber(NaN));     // true

// explanation: This works since NaN is the only JS value that is not === to itself.


