
// Deep copy happens, pass by values

const a = 21 ;
let b= a ;
console.log (a);
console.log(b);

const c = 15 ;
let d= c ;
console.log (c);
console.log(d);

// shallow copy happens for objects, pass by reference
const arr1 = [1,2,3];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.push(4);
console.log(arr1);
console.log(arr2);

