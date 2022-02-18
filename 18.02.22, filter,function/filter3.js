const ages = [30, 32, 16 ,20 , 40];
const result = ages.filter (checkAdult);
function checkAdult (age) {
    return age >= 18;

}
console.log (result);
