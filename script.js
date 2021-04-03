window.addEventListener("load", () => {
  renderCard(myLibrary);
});

// Add new book button functionality
const newBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.querySelector(".add-book");
newBookBtn.addEventListener(
  "click",
  () => (addBookForm.style.display = "flex")
);

// Close functionality new book form
const closeBookForm = document.querySelector(".close-form");
closeBookForm.addEventListener(
  "click",
  () => (addBookForm.style.display = "none")
);

// Add button functionality new book form
addBookBtn = document.querySelector(".add-form-btn");
addBookBtn.addEventListener("click", addBookToLibrary);

// Clear button functionality new book form
clearFormBtn = document.querySelector(".clear-form-btn");
clearFormBtn.addEventListener("click", clearForm);

let myLibrary = [
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    pages: 647,
    isRead: false,
  },
  {
    title: "Mistborn: The Well of Ascension",
    author: "Brandon Sanderson",
    pages: 952,
    isRead: true,
  },
];

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
  isRead.value = "";
}

function addBookToLibrary() {
  addBookForm.style.display = "none";
  // return array.map((books) => books);
  addBook = new Book(title, author, pages, isRead);
  myLibrary.push(addBook);

  renderCard(myLibrary);
  clearForm();
}

function renderCard(array) {
  const display = document.querySelector(".show-books");
  const books = document.querySelectorAll(".card");

  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
}

function createCard(item) {
  const addDiv = document.querySelector(".show-books");

  let id = myLibrary.indexOf(item);

  let cardRead = "";

  if (item.isRead === "true" || true) {
    cardRead = "Read";
  } else if (item.isRead === "false" || false) {
    cardRead = "Unread";
  }

  const card = `<div class="card" id="${id}">
                  <div class="card-top-title">Title:</div>
                  <div class="card-title"><p>${item.title}</p></div>
                  <div class="card-top-author">Author:</div>
                  <div class="card-author"><p>${item.author}</p></div>
                  <div class="card-top-pages">Page(s) Total:</div>
                  <div class="card-pages">${item.pages}</div>
                  <button class="card-btn card-read">${cardRead}</button>
                  <button class="card-btn card-del">Delete</button>
                </div>`;

  addDiv.innerHTML += card;

  // const readBtn = document.querySelector(".card-read");

  // readBtn.addEventListener("click", () => {
  //   if (item.isRead === "true") {
  //     cardRead = "Read";
  //     readBtn.style.backgroundColor = "rgb(2, 117, 216)";
  //   } else if (item.isRead === "false") {
  //     cardRead = "Unread";
  //   }
  //   renderCard();
  // });
}
