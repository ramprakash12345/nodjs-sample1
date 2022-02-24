
class Father {
    city = 'bhopal';

    getAddress () {
        return `from city ${this.city}`;
    }
}

class Boy extends Father {
    name = 'suneet';
    age = 26;

    
    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}


const childOne = new Boy();
console.log(childOne.getFatherAdd());