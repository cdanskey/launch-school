let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*

What does this program log to the console? Why?

Program logs bar to the console. 
The foo variables on line 1 and 3 are two different variables,
line 3 foo only has scope inside of the block.

*/