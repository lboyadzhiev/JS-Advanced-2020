// let particles = [];

// function setup() {
//    createCanvas(400, 3000);
// }

// function draw() {
//    backgroudn(0);

//    for(let i = 0;  i < 5; i++) {
//       let p = new particles();
//       particles.push(p);
//    }

//    for (let i = particles.length - 1; i >= 0; i--) {
//       particles[i].update();
//       particles[i].show();

//       if (particles[i]. finished()) {
//          particles.splice(i, 1);
//       }
//    }
// }

// Objects 
      // Object and Properties
      // Loop Through Objects
      // Internal Properties
//JSON
// Classes
   //Definition

   
// let person = {
//       firstName: 'Pesho',
//       lastName: 'Petrov',
//       age: 30,
// };

// let propName = 'age';
// person['age'] = 31;
// person['grade'] = 6
// console.log(person[propName]);


let person = {
      firstName: 'Tomy',
      lastName: 'Kirilot',
      sex: 'male',
      age: 31,
}

Object.keys(person).map(key => {
      console.log(`${key} <-> ${person[key]}`);
});