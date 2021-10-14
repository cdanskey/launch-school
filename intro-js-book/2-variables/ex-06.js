const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
Will this program produce an error when run? Why or why not?

No error. Line 1 and line 3 variables are separate variables.
Line 3 const FOO is only accessible within the block scope.


*/