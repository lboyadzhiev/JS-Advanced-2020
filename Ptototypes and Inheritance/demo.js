class Person {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }
}

class Teacher extends Person {
   constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
   }
}


// Prototype

let student2 = {
   name: 'Petan',
   hasPen: true,
   
   write: function() {
      console.log(`My name is ${this.name}`);
   }
}

let student1 = {
   name: 'Ivan'
}

// Object.setPrototypeOf(student1, student2);

let newStudent = Object.create(student2);

let protoObject = Object.getPrototypeOf(student1);

console.log(protoObject)