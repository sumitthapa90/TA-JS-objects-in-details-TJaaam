// Animal

let animalMethod = {
  eat() {
    console.log(`I live in ${location} and I can eat`);
  },

  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summaray() {
    returns`I live in ${location} and I have ${numberOfLegs}`;
  },
};

function animals(location, noOfLegs) {
  let isAnimal = Object.create(animalMethod);
  this.location = location;
  this.noOfLegs = noOfLegs;
  return animals;
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

function creatDog(name, color, location, noOfLegs) {
  let dogBreed = Object.create(dogMethod);
  this.name = name;
  this.color = color;
  this.location = location;
  this.noOfLegs = noOfLegs;
  return dogBreed;
}

