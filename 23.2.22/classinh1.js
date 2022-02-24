class Father {
    constructor(city) {
        this.city = city;
    }
    
    getAddress () {
        return `from city ${this.city}`;
    }
}

class Boy extends Father {
    constructor(name, age, city) {
        super(city);
        this.name = name;
        this.age = age;
        this.city = 'Bpl'; // These changes will be reflected in the parent class as well.
    }

    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}

class Girl extends Father {
    constructor(name, age, city) {
        super(city);
        this.name = name;
        this.age = age;
        this.city = 'Nowgong'; // These changes will be reflected in the parent class as well.
    }

    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}


const childOne = new Boy('saurabh', 26, 'bpl');
console.log(childOne.getFatherAdd());
console.log(childOne.getAddress());

const childGirl = new Girl('saurabh', 26, 'bpl');
console.log(childGirl.getAddress());