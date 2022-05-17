const impData = require('./expadd');
console.log(impData.add(2,3));
console.log(impData.add(10,12));
console.log(impData.add(2,25));
console.log(impData.add(20,30));
console.log(impData.add(100,120));
console.log(impData.add(52,254));

const impData2 = require('./expsub');
console.log (impData2.sub(25,15));
console.log (impData2.sub(15,11));
console.log (impData2.sub(250,150));
console.log (impData2.sub(125,115));
console.log (impData2.sub(35,15));
console.log (impData2.sub(45,25));
console.log (impData2.sub(75,55));

const impData3 = require('./expmul');
console.log (impData3.mul(5,15));
console.log (impData3.mul(5,11));
console.log (impData3.mul(2,15));
console.log (impData3.mul(12,11));
console.log (impData3.mul(3,15));
console.log (impData3.mul(45,2));
console.log (impData3.mul(7,15));

const impData4 = require('./expdiv');
console.log (impData4.div(15,5));
console.log (impData4.div(50,10));
console.log (impData4.div(20,5));
console.log (impData4.div(120,10));
console.log (impData4.div(300,15));
console.log (impData4.div(450,20));
console.log (impData4.div(700,5));

const impConcat = require ('./expconc');
console.log(impConcat.concat('hello','saurabh'));

