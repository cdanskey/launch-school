let x = '5';
x = x + 1;
console.log(x);   // '51'

let y = '5';
console.log(y++);  // 5
console.log(y);    // 6

/*
5 is returned from y++. The postfix ++ operator 
will return the value before it is incremented. When 
the increment operator is used on a string 
JavaScript will coerce the string to a number. 

Which is different from the first example. When 
a string and number are added together using the +
operator the number is coerced into a string. 
*/