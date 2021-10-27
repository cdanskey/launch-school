function negativeZero(value) {
  return (value === 0) && (1 / value  === -Infinity);
}


console.log(negativeZero(-0));      // true

console.log(negativeZero(0));       // false
console.log(negativeZero(-7));      // false 
console.log(negativeZero(-.00007)); // false
console.log(negativeZero('-0'));    // false
