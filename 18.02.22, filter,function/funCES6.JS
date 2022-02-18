// Arrow fucntions

const add = (a,b) => {
    return a+b;
}
// In arraow functions if only one statement is there, then flower brackets and return keyword can be omitted

const add2 = (a,b) =>  a+b
const add3 = (a,b) =>  a+b
console.log(add(20,30));
console.log(add2(40,20));
console.log(add3(50,40));

const substract = (a,b) => {
    return a-b;
}
const substract2 = (a,b) => a-b
const substract3 = (a,b) => a-b
console.log (substract (50,20));
console.log (substract2(60,20));
console.log (substract3(100,70));



const square = num =>  num * num
console.log(square(10));
console.log(square(20));
const cube  = num =>  num * num * num
console.log(cube(5));
console.log(cube(3));

