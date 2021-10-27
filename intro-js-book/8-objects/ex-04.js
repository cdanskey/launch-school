let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);

let upperKeys = objKeys.map(value => value.toUpperCase());

console.log(upperKeys); // ['B', 'A', 'C']
console.log(obj);  // [b: 2, a: 1, c: 3]
console.log(objKeys);  // ['b', 'a', 'c']

