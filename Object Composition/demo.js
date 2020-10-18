/*
Object Composition
   Combining simple objects or data types into more complex ones
Destructuring

Forms of Object Composition
   Aggregation
   Concatenation
   Delegation

*/


let person = {
   firstName: 'Lachezar',
   lastName: 'Boyadzhiev',
   age: 32,
   grades: [2, 4, 2, 6],
   school: {
      name: 'Hristo Botev',
      maxGrade: 12,
      adress: 'str...',
      
   },
   reportGrades: function () {
      return (`My grades are: ${this.grades.join(', ')}`)
   },
   toString: function() {
      return `My name is ${this.firstName} ${this.lastName} and I study in ${this.school.name} school`;
   }
};

person.location = {
   lat: 48.22,
   lng: 23.32,
};

console.log(person.toString());

