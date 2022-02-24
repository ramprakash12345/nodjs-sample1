// In ES6 defininig constructor is not mandatory, this keyword ia also not mandotory while defining parameteres

class Person {
    name = 'saurabh';
    city = 'indore';

    getAddress () {
        return `${this.name} is from city ${this.city}`;
    }
}

const personOne = new Person();
const personTwo = new Person();

console.log(personOne)