let number = 4936;

onesPlace = number % 10;
console.log(`ones  ${onesPlace}`);
number = (number - onesPlace) / 10;

tensPlace = number % 10;
console.log(`tens ${tensPlace}`);
number = (number - tensPlace) / 10;

hundredsPlace = number % 10;
console.log(`hundreds ${hundredsPlace}`);
number = (number - hundredsPlace) / 10;

console.log(`thousands ${number}`);