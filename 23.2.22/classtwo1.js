class Person {
    name = 'vaibhav';
    city = 'bhopal';

    getAddress () {
        return `${this.name} is from city ${this.city}`;
    }
}

const personOne = new Person();
const personTwo = new Person();

console.log(personOne)