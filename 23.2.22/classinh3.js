// in ES^ without using super() , you can exten the properties of parent onto chld.

class Father {
    city = 'nowgong';

    getAddress () {
        return `from city ${this.city}`;
    }
}

class Boy extends Father {
    name = 'saurabh';
    age = 26;
    // city = 'nowgong'; // These changes will be reflected in the parent class as well.
    
    getFatherAdd() {
        return `${this.name} is from city ${this.city}`;
    }
}


const childOne = new Boy();
console.log(childOne.getFatherAdd());