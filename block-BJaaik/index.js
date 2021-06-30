class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  // methods
  eat() {
    return `Eating Healty foof is good for health`;
  }
  sleep() {
    return `Sleep maximum 8 hours`;
  }
  walk() {
    return `Morning walk is good for health`;
  }
}

class Player extends Person {
  constructor(sportsName, name, age, gender) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  plays() {
    return `play ${this.sportName} very well`;
  }
}

class Cricketer extends player {
  constructor(teamName, sportsName, name, age, gender) {
    super(sportsName, name, age, gender);
    this.teamName = teamName;
  }

  playCricket() {
    return `play Cricket as allrounder`;
  }
}

class Teacher extends Person {
  constructor(instituteName, name, age, gender) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }

  teach() {
    return `Teach Well`;
  }
}

class Artist extends person {
  constructor(kind, name, age, gender) {
    super(name, age, gender);
        this.kind = kind;
  }

  creatArt() {
    return `Is expert in ${this.kind} art`;
  }
}
// let artist1 = new Artist("Dancing", "James", 25, "Male");

// let teacher1 = new Teacher("AltCampus", "Ankit", 27, "Male");

// let cricketer1 = new Cricketer("India", "Cricket", "Hardik Pandya", 28, "Male");

// let player1 = new Player("Badminton", "Saina Nehwal", 28, "female");
