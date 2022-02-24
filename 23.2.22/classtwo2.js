class Person {
    name = 'shubham';
    city = 'ujjain';

    getAddress () {
        return `${this.name} is from city ${this.city}`;
    }
}

const personOne = new Person();
const personTwo = new Person();

console.log(personOne)