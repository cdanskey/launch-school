function oddLengths(arr) {
  let lengths = arr.map(str => str.length);
  return lengths.filter(num => num % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

