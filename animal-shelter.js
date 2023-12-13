const animalData = require('./animal-data.json');

class Animal{
    constructor(name, species, color, hunger = 50){
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet(){
        console.log(`Hi, I'm ${this.name} the ${this.species}!`);
    }

    feed(){
        this.hunger -= 20
        console.log('Yum, I love food.');
    }
}

class Cat extends Animal{
    constructor(name, color, hunger = 50){
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet(){
        console.log(`Meow, I'm ${this.name} the ${this.species}!`);
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}.`);
    }
}
class Dog extends Animal{
    constructor(name, color, hunger = 50){
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    greet(){
        console.log(`Woof, I'm ${this.name} the ${this.species}!`);
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}.`);
    }
}



class AnimalShelter{
    constructor(){
        this.animals = []
    }

    addAnimal(animal){
        this.animals.push(animal)
    }

    adopt(animal){
        const animalIndex = this.animals.indexOf(i)
        this.animals.splice(animalIndex, 1)
    }

    getAnimalsBySpecies(species){
        return this.animals.filter(animals => animals.species === species)
    }
}

const shelter = new AnimalShelter()
for(const animal of animalData){
    const hunger = animal.hunger ? animal.hunger : 50
    const newAnimal = new Animal(animal.name, animal.species, animal.color, hunger)
    shelter.addAnimal(newAnimal)
}


