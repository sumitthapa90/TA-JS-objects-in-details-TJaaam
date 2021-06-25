// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name, age) {
  let user = {};
  user.name;
  user.age;
  return user;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age) {
  let user = {};
  user.name;
  user.age;
  user.sayHello = function () {
    alert(`Welcome ${user.name}`);
  };
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("sumit", 30);

let personTwo = createUser("mukul", 34);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let userMethod = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

function createUser(name, age) {
  let user = Object.create(userMethod);
  this.name;
  this.age;
  return user;
}

let personThree = createUser("sumit", 30);

let personFour = createUser("mukul", 34);

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

createUser.prototype = {
  sayHello: function () {
    alert(`Welcome ${this.name}`);
  },
};

function createUser(name, age) {
  let user = Object.create(createUser.prototype);
  this.name;
  this.age;
  return user;
}

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

let personOne = new CreateUser("sumit", 30);

let personTwo = new CreateUser("mukul", 34);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();

// 8. Convert the `createUser` function into `User` class.

class user {
  constructor(name, age) {
    this.name;
    this.age;
  }
  sayHello() {
    alert(`Welcome ${this.name}`);
  }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
