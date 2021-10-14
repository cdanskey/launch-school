function userResponce(prompt){
  let rlSync = require('readline-sync');
  let responce = rlSync.question(prompt);
  return responce;
}

let firstName = userResponce("What is your first name? ");
let lastName = userResponce("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);