let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* 
This code causes an infinite loop. 
On line 3, counter is assigned
to 1 (counter = 1) and will 
evaluate to a truthy value every time.
That also causes counter to never be 
greater than 2, the line 7 if statement
is then always false and never executes the 
break.

*/ 