function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
isArrayEmpty();

/* 
Logs Not Empty to the console.
Even though the array is empty,
an empty array has a truthy value
and so the function executes the first 
branch of the if statement.
*/
