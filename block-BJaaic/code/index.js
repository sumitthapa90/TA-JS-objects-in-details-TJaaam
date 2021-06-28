// Animal

let animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },

  changeLocation(newLocation) {
    this.location = newLocation;
    return this.newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

//  Dogs

let dogMethod = {
  bark() {
    alert(`I am ${name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.newColor = newColor;
    return this.color;
  },

  summaray() {
    returns`I am ${name} and I am of ${color} color. I can also bark`;
  },
};
Object.setPrototypeOf(dogMethod, animalMethods)

function creatDog(name, color, location, numberOfLegs) {
  let dogBreed = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(Object, dogMethod);
  dogBreed.location = location;
  dogBreed.numberOfLegs = numberOfLegs;
  return dogBreed;
}
