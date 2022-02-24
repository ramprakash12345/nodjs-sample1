// We use classes to define a template
//  ES5 syntax

class Bus {
    constructor(name, year, seats){
        this.name = name ;
        this.year = year ;
        this.seats = seats ;

    }
}
const myBus = new Bus ("volvo","2019", "60");

console.log(myBus.name);
console.log(myBus.year);
console.log (myBus.seats);
