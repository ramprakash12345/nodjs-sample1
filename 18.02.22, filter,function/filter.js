// It will filter the elements of array based on the condition
const arr = [20,40,30,10,50,80];

const result = arr.filter((num, index, array) => {
    return num > 40;
});

console.log(result);


const result2 = arr.filter(num => num > 40);
console.log(result2);


