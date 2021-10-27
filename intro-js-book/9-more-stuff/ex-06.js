let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, pattern) {
  let matchArray = [];
  arr.forEach(word => {
    if (pattern.test(word)){
      matchArray.push(word);
    }  
  });
  return matchArray;
}

console.log(allMatches(words, /lab/)); 

// => ['laboratory', 'flab', 'elaborate']
