const person = {
    firstName: "saurabh",
    lastName: "pathak",
    age: 27,
    eyeColor: "brown"
  }
  delete person.age;
  person.nationality = "indian";
  console.log(person);
  
module.exports = person;