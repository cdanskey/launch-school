let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

/*
logs: [1, 4, 3]
At the memory address of an object is stored a 
pointer to the actual object. Array2 copies the
pointer to the object instead of the actual object.
Changing an element using array1 also changes that
element in array2 as both arrays point to the
same object. 
*/    
