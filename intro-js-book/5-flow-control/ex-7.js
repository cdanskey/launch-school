function longStringCaps(str) {
  if (str.length > 10){
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(longStringCaps("goodbye"));  // goodbye
console.log(longStringCaps("hello world"));  // HELLO WORLD

