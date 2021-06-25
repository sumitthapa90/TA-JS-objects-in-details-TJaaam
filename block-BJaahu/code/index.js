// function creatBook(name, author, pages) {
//   let book = Object.create(creatBook.prototype);
//   book.name = name;
//   book.author = author;
//   book.pages = pages;
//   return book;
// }

// creatBook.prototype = {
//   getSummary() {
//     console.log(
//       `to kill a ${this.name} is writting an ${this.author} and it contain ${this.Pages}`
//     );
//   },

//   changePage(pages) {
//     this.pages = pages;
//     return this.page;
//   },

//   changeAuthor(author) {
//     this.author = author;
//     return this.author;
//   },
// };

// let book1 = creatBook("to kill a Mockingbird", "harper lee", 256);
// let book2 = creatBook();

// // Prototypal Pattern

let questionMethods = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

function Question(title, options, correctAnswerIndex) {
  let Obj = Object.create(questionMethods);
  Obj.title = title;
  Obj.options = options;
  Obj.correctAnswerIndex = correctAnswerIndex;
  return Obj;
}

// Pseudoclassical Pattern
function Question(title, options, correctAnswerIndex) {
  let Obj = Object.create(Question.prototype);
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
  return Obj;
}

Question.prototype = {
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  },
};

// (Put methods inside F.prototype and use `new` to call function)

// function Question(title, options, correctAnswerIndex) {
//     let Obj = Object.create(Question.prototype);
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
//     return Obj;
//   }

//   Question.prototype = {
//     isAnswerCorrect(index) {
//       return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer() {
//       return this.options[this.correctAnswerIndex];
//     },
//   };
class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
};


