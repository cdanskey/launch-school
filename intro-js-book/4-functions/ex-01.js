let bar = 1;
function foo() {
  let bar = 2;
}

foo(); 
console.log(bar) 

/* 
Logs 1 to the console.
Executing foo function does not affect output
because bar is declared inside the function
and is a separate variable then the variable bar
on line one.
*/

