console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor (name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobbyToRemove) {
        let listOfHobbiesWithoutX = this.hobbies.filter((hobby) => {
            return hobby !== hobbyToRemove;
        });
        this.hobbies = listOfHobbiesWithoutX;
        
    }

    greeting() {
        let petGreeting = (numberOfPets) => {
            let salutation;
            if (numberOfPets > 1) {
                salutation = "How are your pets?";
            } else if (numberOfPets === 1) {
                salutation = "How is your fur child?";
            } else {
                salutation = "";
            }
            let generalGreeting = `Hello, ${this.name}! ${salutation}`
            return generalGreeting;
        }
        return petGreeting(this.pets);

    } 
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full-Stack Web Developer";
    }

    addOccupation(occupation) {
        console.log(typeof (this.occupation));
        this.occupation.push(occupation);
    }

    greeting() {
            if (this.occupation === "Full-Stack Web Developer") {
                let salutation = `What are you coding today?`;
                let newGreeting = `Hello, ${this.name}! ${salutation}`;
                return newGreeting;
            } else {
                return;
            }
    } 
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let kal = new Person("Kal", 1, "5F", ["WCS", "Video Games"])

let emily = new Coder("Emily", 0, "5F", ["WCS", "Crochet", "Embroidery"]);

console.log(emily);
console.log(kal);

kal.addHobby("Crochet");

console.log(kal.hobbies);

emily.removeHobby("Crochet");
console.log(emily.hobbies);

console.log(kal.greeting());
console.log(emily.greeting());


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    displayResult() {
        console.log(this.result);
        return this.result;
    }

    constructor() {
        this.result = 0;
    }

    add(a, b) {
        if (b === undefined) {
            this.result = this.result + a;
        } else { 
            this.result = a + b;
        }
        return this.displayResult();
    }

    subtract(a, b) {
        if (b === undefined) {
            this.result = this.result - a;
        } else { 
            this.result = a - b;
        }
        return this.displayResult();
    }

    multiply(a, b) {
        if (b === undefined) {
            this.result = this.result * a;
        } else { 
            this.result = a * b;
        }
        return this.displayResult();
    }

    divide(a, b) {
        if (b === undefined) {
            this.result = this.result / a;
        } else { 
            this.result = a / b;
        }
        return this.displayResult();
    }

}

let calc = new Calculator;

calc.multiply(4, 15);

calc.multiply(4);
calc.add(1);
calc.subtract(10);
calc.divide(9);

