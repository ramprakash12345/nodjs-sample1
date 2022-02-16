// eg on loop for.in

const person = ['john', 'cena', ];

for(const index in person){
console.log(`${person[index]} is at position ${index}`)
}

const person1 = {name: 'saurabh', sirname: 'pathak', likes : 'node.js'}

for(const key in person1){
console.log(`${key}: ${person1[key]}`)
}

const person3 = ['saurabh', 'nilesh', 'rahul', 'anita', 'srikant','sikha', 'subham'];

for(const index in person3){
console.log(`${person3[index]} is at position ${index}`)
}
