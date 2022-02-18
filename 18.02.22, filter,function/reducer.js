// reduce is used on arrays to reduce the array to a single element

// calculate the sum of all the elemnts in an array

const arr = [12,14,13,10,25,18];
let sum = 0;
const result = arr.reduce((prev = 0, curr, index, array) => {
    console.log('prev : ', prev);
    console.log('curr : ', curr);
    sum = prev+curr+sum;
    return sum;
});

console.log(result);

