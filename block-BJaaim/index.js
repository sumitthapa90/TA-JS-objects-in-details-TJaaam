class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrect(answer) {
    if (answer === this.options.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  gerCorrectAnswer() {
    return this.options[this.correctAnswer];
  }

  createUI(){
      
  }
}
