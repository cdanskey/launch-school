function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

let str = 'Cat in the hat'; 
doSomething(str);
console.log((str));                //  'Cat in the hat' 
console.log(doSomething(str));     //  [3, 3, 2, 3]

/* 
This function will divide a string up into an array of 
individual words, reverse the order the 
array, and then transforms the string elements into 
numbers the lengths of the individual words.
Returns a new array, does not mutate the original string.
*/

