// [ ] Using function to create object

function user(name, id, noOfProjects) {
  let obj = {};
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;

  obj.getProject = function () {
    return obj.noOfProjects;
  };
  obj.changeName = function (newName) {
    let preName = obj.name;
    obj.name = newName;
    return preName;
  };

  obj.incrementProject = function () {
    return ++obj.noOfProjects;
  };

  obj.decrementProjects = function () {
    return --obj.noOfProjects;
  };

  return obj;
}

let user1 = user("John", 217, 50);
let user2 = user("Arya", 200, 100);

//  [ ] Using Object.create (prototypal pattern)

let userMethod = {
  getProject: function () {
    return obj.noOfProjects;
  },
  changeName: function (newName) {
    let preName = obj.name;
    obj.name = newName;
    return preName;
  },

  incrementProject: function () {
    return ++obj.noOfProjects;
  },

  decrementProjects: function () {
    return --obj.noOfProjects;
  },
};

function user(name, id, noOfProjects) {
  let obj = Object.create(userMethods);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  return obj;
}

let user3 = user("John", 217, 50);
let user4 = user("Arya", 200, 100);

// Using Pseudoclassical Way

function user(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

user.prototype = {
  getProject: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let preName = this.name;
    this.name = newName;
    return preName;
  },

  incrementProject: function () {
    return ++this.noOfProjects;
  },

  decrementProjects: function () {
    return --this.noOfProjects;
  },
};

let user1 = new user("John", 217, 50);
let user2 = new user("Arya", 200, 100);

// Using Class

class user {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProject() {
    return this.noOfProjects;
  }
  changeName(newName) {
    let preName = this.name;
    this.name = newName;
    return preName;
  }

  incrementProject() {
    return ++this.noOfProjects;
  }

  decrementProjects() {
    return --this.noOfProjects;
  }
}

let user1 = new user("John", 217, 50);
let user2 = new user("Arya", 200, 100);
