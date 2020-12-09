class Vacation {
   constructor(organizer, destination, budget) {
      this.organizer = organizer,
         this.destination = destination,
         this.budget = Number(budget),
         this.kids = {}
   }

   registerChild(name, grade, budget) {
      
   }

   removeChild(name, grade) {

   }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));