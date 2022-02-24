class Classengg {
    constructor(branch, semester, subject, year, result){
        this.branch = branch ;
        this.semester = semester;
        this.subject = subject;
        this.year = year ;
        this.result = result ;

    }
    getBranch () {
        return `${this.branch} is from semester ${this.semester}`;
    }
        
}
const myClassengg = new Classengg ("mechanical","third", "som", "2014","pass");

console.log(myClassengg.branch);
console.log(myClassengg.semester);
console.log (myClassengg.subject);
console.log (myClassengg.year);
console.log (myClassengg.result);
