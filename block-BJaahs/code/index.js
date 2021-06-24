// Without Object
let title = "title";
let options = ["option1", "option2", "option3", "option4"];
let correctAnswerIndex = 3;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}
function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

//Organize using object

let question = {
  title: "title",
  options: ["option1", "option2", "option3", "option4"],
  correctAnswerIndex: 3,
  isAnswerCorrect(index) {
    return index === question.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return question.options[correctAnswerIndex];
  },
};

//// Using function to create object
function creatQues(title, options, correctAnswerIndex) {
  let ques = {};
  ques.title = title;
  ques.options = options;
  ques.correctAnswerIndex = correctAnswerIndex;

  ques.isAnswerCorrect = function (index) {
    return index === ques.correctAnswerIndex;
  };

  ques.getCorrectAnswer = function () {
    return ques.options[correctAnswerIndex];
  };
  return ques;
}

//Convert the function to use `this` keyword

function creatQues(title, option, correctAnswerIndex) {
  let ques = {};
  ques.title = "title";
  ques.options = options;
  ques.correctAnswerIndex = correctAnswerIndex;

  ques.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };

  ques.getCorrectAnswer = function () {
    return this.options[correctAnswerIndex];
  };
  return ques;
}

//Write test by creating two objects also test both methods.
