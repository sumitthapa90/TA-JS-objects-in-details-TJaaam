// class Animal

class Animals {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  // methods
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
  }
  summary() {
    returns`I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// Dogs

class Dog extends Animals {
  constructor(name, color, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.newName;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.newColor;
  }
  summary() {
    returns`I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// Cats

class Cat extends Animals {
  constructor(name, colorOfEyes, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
    return this.newName;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.newColor;
  }
  summary() {
    returns`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
