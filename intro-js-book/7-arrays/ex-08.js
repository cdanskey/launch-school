let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((oddLengthsArray, str) => {
    if(str.length % 2 === 1){
      oddLengthsArray.push(str.length);
    } 
    return oddLengthsArray;
  }, [] );
}

console.log(oddLengths(arr)); // => [1, 5, 3]