const generatePyramid= NumberofRows =>{

  
 
    for (let i = 1; i <= NumberofRows; i++) {
      let str = '';
      
    for (let j = 1; j <= i; j++) {
      str += j;
      }
      console.log(str);
    }
  }
  exports.generatePyramid=generatePyramid;