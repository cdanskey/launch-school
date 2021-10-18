function evenOrOdd(num) {
  if(!Number.isInteger(num)) {
    console.log("Value is not an integer.");
    return;
  }
  if (num % 2 === 0) { 
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(3); // odd
evenOrOdd("79"); // Not a number
evenOrOdd(6);  // even