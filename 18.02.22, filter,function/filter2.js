// It will filter the elements of array based on the condition

const arr = [5,10,15,20,25,30];

const result = arr.filter((num, index, array) => {
    return num > 10;
});

console.log(result);


const result2 = arr.filter(num => num > 10);
console.log(result2);
