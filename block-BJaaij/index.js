class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class BookList {
  constructor() {
    this.AllBooks = [];
    this.currenIndex = 0;
  }

  add(arr = []) {
    this.AllBooks = this.allBooks.concat(arr);
    return this.allBooks;
  }
  getCurrentBook() {
    return this.AllBooks[this.currenIndex];
  }
  getNextBook() {
    return this.AllBooks[this.currenIndex + 1];
  }
  getPrevBook() {
    this.AllBooks[this.currenIndex - 1];
  }
  changeCurrentBook(para) {
    this.currenIndex = para;
  }
}

let book1 = new Book(
  "The Old Man and the Sea",
  "Allegory, Nautical fiction",
  "Ernest Hemigway"
);


let book2 = new Book("Harry Potter", "Fantasy", "J K Rowling");
let book3 = new Book("Lord of the rings", "Fantasy", "Tolkins");
let book4 = new Book("Wings of fire", "Autobiography", "A P J");
let book5 = new Book("Animal Farm", "Political Satire", "Gorge Orewell");

let bookList1 = new Booklist();

bookList1.add([book1, book2, book3, book4, book5]);
