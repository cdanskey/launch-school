function isNotANumber(value){
  return typeof value !== "number";
}

console.log(isNotANumber(33));      // false 
console.log(isNotANumber("bob"));   // true
console.log(isNotANumber('33'));    // true
console.log(isNotANumber([1, 5]));  // true


/*
Expanded version of the function

function isNotANumber(value){
  if(typeof value === "number"){
    return false;
  } else 
    return true;
}

------------------------------------
Solution from the book

function isNotANumber(value) {
  return value !== value;
}

explanation: 
This works since NaN is the only 
JS value that is not === to itself.

*/
