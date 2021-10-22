let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

console.log(arr);  

/*

Logs to the console
[
  ["hello", "world"],
  ["example", "mem", null, 606, 88],
  [4, 8, 12]
]

*/