window.addEventListener("load", () => {
  getData();
});

// Add new book button functionality
const addBookForm = document.querySelector(".add-book");
const newBookBtn = document
  .querySelector(".add-book-btn")
  .addEventListener("click", () => (addBookForm.style.display = "flex"));

// Close functionality new book form
const closeBookForm = document
  .querySelector(".close-form")
  .addEventListener("click", () => (addBookForm.style.display = "none"));

// Add button functionality new book form
const addBookBtn = document
  .querySelector(".add-form-btn")
  .addEventListener("click", addBookToLibrary);

// Clear button functionality new book form
const clearFormBtn = document
  .querySelector(".clear-form-btn")
  .addEventListener("click", clearForm);

// Read/unread button functionality

let myLibrary = [];

let addBook;

function Book(title, author, pages, isRead) {
  (this.title = title.value),
    (this.author = author.value),
    (this.pages = pages.value),
    (this.isRead = isRead.value);
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.value = "Unread";
}

function addBookToLibrary() {
  addBookForm.style.display = "none";
  addBook = new Book(title, author, pages, isRead);
  myLibrary.push(addBook);
  setData();
  render(myLibrary);
  clearForm();
}

function render() {
  const display = document.querySelector(".show-books");
  const books = document.querySelectorAll(".card");

  books.forEach((book) => display.removeChild(book));

  myLibrary.forEach((book) => {
    createCard(book);
  });
}

function createCard(book) {
  const addCard = document.querySelector(".show-books");

  let id = myLibrary.indexOf(book);

  const card = `<div class="card" id="${id}">
                  <div class="card-top-title">Title:</div>
                  <div class="card-title"><p>${book.title}</p></div>
                  <div class="card-top-author">Author:</div>
                  <div class="card-author"><p>${book.author}</p></div>
                  <div class="card-top-pages">Page(s) Total:</div>
                  <div class="card-pages">${book.pages}</div>
                  <button class="card-btn card-read-${id}">${book.isRead}</button>
                  <button class="card-btn btn-del card-del-${id}">Delete</button>
                </div>`;

  addCard.insertAdjacentHTML("beforeend", card);

  const changeRead = document.querySelector(`.card-read-${id}`);

  if (book.isRead === "Read") {
    changeRead.style.backgroundColor = "rgb(59, 182, 59)";
  } else {
    changeRead.style.backgroundColor = "rgb(217, 83, 79)";
  }

  changeRead.addEventListener("click", () => {
    console.log(`Working on button id ${id}`);
    if (book.isRead === "Read") {
      book.isRead = "Unread";
      changeRead.textContent = "Unread";
      changeRead.style.backgroundColor = "rgb(217, 83, 79)";
      setData();
    } else {
      book.isRead = "Read";
      changeRead.textContent = "Read";
      changeRead.style.backgroundColor = "rgb(59, 182, 59)";
      setData();
      console.log(book.isRead);
      console.log(myLibrary);
    }
  });

  const delBook = document.querySelector(`.card-del-${id}`);

  delBook.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    setData();
    render();
  });
}

// Stores myLibrary array to localStorage

function setData() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Retrieves myLibrary array from localStorage

function getData() {
  if (!localStorage.myLibrary) {
    render();
  } else {
    let library = JSON.parse(localStorage.getItem("myLibrary"));
    myLibrary = library;
    render();
  }
}
