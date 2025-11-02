{
//    instanceof type guard
class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeow() {
        console.log(`${this.name} meows.`);
    }
}


const identifyAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
        animal.makeBark();
    } else if (animal instanceof Cat) {
        animal.makeMeow();
    } else {
        animal.makeSound();
    }
}

const dog = new Dog("Buddy", "Canine");
const cat = new Cat("Whiskers", "Feline");

identifyAnimal(dog);
identifyAnimal(cat);












}

