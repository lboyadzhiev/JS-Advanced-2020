class Vacation {
   constructor(organizer, destination, budget) {
      this.organizer = organizer;
      this.destination = destination;
      this.budget = Number(budget);
      this.kids = {}
   }

   registerChild(name, grade, budget) {

      const kidArr = [];
      const kid = [`${name}-${budget}`];
      grade = grade;

      kidArr.push(kid);

      if (budget >= this.budget) {
         if (!this.kids[grade] !== kidArr) {
            this.kids[grade] = kidArr;
            return this.kids[grade];
         } else {
            return `${name} is already in the list for this ${this.destination} vacation`;
         }

      } else {
         return `${name}'s money is not enough to go on vacation to ${this.destination}.`
      }

   }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));