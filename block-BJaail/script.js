let form = document.querySelector("form");
let bookRoot = document.querySelector(".book-list");

const titleEle = form.elements.bookTitle;
const authorElm = form.elements.bookAuthor;
const isbnEle = form.elements.bookIsbn;

form.addEventListener("submit", handleClick);

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isRead = false;
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  add(title, author, isbn) {
    let book = new Book(title, author, isbn);
    this.books.push(book);
    this.creatUI();
  }

  //   <!-- <li>
  //   <img
  //     src="./assets/wings-of-fire-3a-an-autobiography-1st-edition-500x500.jpeg"
  //     alt=""
  //   />
  //   <h2>Wings Of Fire</h2>
  //   <p>Dr.A. P. J. Abdul Kalam</p>
  //   <button class="form-btn-2">Mark as read!</button>
  // </li> -->
  creatUI() {
    bookRoot.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = book.img;
      let h1 = document.createElement("h1");
      h1.innerText = book.title;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.innerText = "Mark as read";
      button.classList.add(".form-btn");
      li.append(img, h1, p, button);
      bookRoot.append(li);
    });
  }
}

let library = new BookList();

function handleClick(event) {
  event.preventDefault();
  const title = titleEle.value;
  const author = authorElm.value;
  const isbn = isbnEle.value;
  library.add(title, author, isbn);
}
