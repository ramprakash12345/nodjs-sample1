// We use classes to define a template
//  ES5 syntax

class Car {
    constructor(name, year){
        this.name = name ;
        this.year = year ;

    }
}
const myCar = new Car ("ford","2014");

console.log(myCar.name);
console.log(myCar.year);
