class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  // methods
  eat() {
    console.log(`${this.name} can eat`);
  }
  sleep() {
    console.log(`${this.name} can sleep`);
  }
  walk() {
    console.log(`${this.name} can walk`);
  }
}

class Player extends Person {
  constructor(sportsName, name, age, gender) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  plays() {
    console.log(`${this.name} can play`);
  }
}

class Cricketer extends Player {
  constructor(teamName, sportsName, name, age, gender) {
    super(sportsName, name, age, gender);
    this.teamName = teamName;
  }

  playCricket() {
    console.log(`${this.name} can play cricket`);
  }
}

class Teacher extends Person {
  constructor(instituteName, name, age, gender) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    console.log(`${this.name} can teach`);
  }
}

class Artist extends Person {
  constructor(kind, name, age, gender) {
    super(name, age, gender);
    this.kind = kind;
  }

  creatArt() {
    console.log(`${this.name} can creat art`);
  }
}
let artist1 = new Artist("Dancing", "James", 25, "Male");

let teacher1 = new Teacher("AltCampus", "Ankit", 27, "Male");

let cricketer1 = new Cricketer("India", "Cricket", "Hardik Pandya", 28, "Male");

let player1 = new Player("Badminton", "Saina Nehwal", 28, "female");
