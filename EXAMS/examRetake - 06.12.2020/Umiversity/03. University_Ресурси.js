function solveClasses() {

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.problems = []
        }

        toString() {
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
        }
    }

    class Teacher extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName);
            this.problems;
        }

        createProblem(id, difficulty) {

            const problem = {
                id,
                difficulty: Number(difficulty)
            }
            this.problems.push(problem);

            return this.problems;
        }

        getProblems() {
            return this.problems;
        }

        showProblemSolution(id) {
            this.problems.forEach(p => {
                if (!p.hasOwnProperty(id)) {
                    throw new Error(`Problem with id ${id} not found.`)
                } else {
                    this.problems.difficulty -= 1;
                    return p;
                }
                
            })

        }
    }

    class Student extends Person {
        constructor(fistName, lastName, graduationCredits, problems) {
            super(fistName, lastName);

            this.graduationCredits = Number(graduationCredits);
            this.problems = problems;
            this.solvedProblems = [];
            this.myCredits = 0;
        }

        solveProblem(id) {
            this.problems.forEach(p => {
                if (!p.hasOwnProperty(id)) {
                    throw new Error(`Problem with id ${id} not found.`);
                } else {
                    if(this.solvedProblems.includes(p)) {
                        return;
                    } else {
                        this.solvedProblems.push(p);
                        this.myCredits += p.difficulty;
                    }
                }

                return this.myCredits;
            })

            
        }

        graduate() {
            if (this.myCredits >= this.graduationCredits) {
                return `${this.firstName} ${this.lastName} has graduated succesfully.`
            } else {
                let credits = this.graduationCredits - this.myCredits;

                return `${this.firstName} ${this.lastName}, you need ${credits} credits to graduate.`
            }
        }

    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = solveClasses();
const teacher = new classes.Teacher("Ivailo", "Papazov");
teacher.createProblem('as442df', 5);
console.log(teacher.problems);

teacher.createProblem('ffff44', 15);
console.log(teacher.problems);

teacher.showProblemSolution('as442df');
console.log(teacher.problems);
//----------------------------------------------------------------------------
classes = solveClasses();
const student = new classes.Student("Pesho", "Petrov", 23, [{ id: '111', difficulty: 5 }, { id: '222', difficulty: 15 }]);

student.solveProblem('111');
console.log(student.myCredits);
console.log(student.graduate());

student.solveProblem('222');
console.log(student.solvedProblems);
console.log(student.graduate());
