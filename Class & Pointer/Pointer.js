//Pointers in JS

//Without Pointers
let a=5;
let b = a;
console.log("Value of a is " ,a)
console.log("Value of b is ",b)
a=20
console.log("Value of a is " ,a)
console.log("Value of b is ",b)


//With Pointers - Using objects

let obj1 = { val : 11}
let obj2 = obj1
console.log("Value of obj1 is " ,obj1)
console.log("Value of obj2 is ",obj2)
obj1.val=22
console.log("Value of obj1 is " ,obj1)
console.log("Value of obj2 is ",obj2)