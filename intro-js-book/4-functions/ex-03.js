function userResponce(prompt){
  let rlSync = require('readline-sync');
  let responce = rlSync.question(prompt);
  return responce;
}

let num1 = userResponce("Enter a number: ");
let num2 = userResponce("Enter a second number: ");

function multiply(a, b){
  return a * b;
}

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);