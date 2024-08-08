const myLibrary = [];

// Functions

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(i) {
    const book = myLibrary[i];

    // Create book container and create individual blocks
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const colorBlock = document.createElement("div");
    colorBlock.classList.add("color-block");
    const bookBlock = document.createElement("div");
    bookBlock.classList.add("book-block");
    bookBlock.innerHTML = `<h2>${book.title}</h2>\n<p>${book.author}</p>\n<p><strong>Pages:</strong> ${book.pages}</p>`
    const buttonBlock = document.createElement("div");
    buttonBlock.classList.add("button-block");

    let readOrNot;
    if (book.read === "Read") {
        readOrNot = "read";
    } else {
        readOrNot = "notread";
    }
    buttonBlock.innerHTML = `<button class="read-toggle ${readOrNot}">${book.read}</button>`;

    // Arrange book card
    bookCard.appendChild(colorBlock);
    bookCard.appendChild(bookBlock);
    bookCard.appendChild(buttonBlock);

    // Append book card to container
    const bookContainer = document.querySelector(".display-container");
    bookContainer.append(bookCard);
}

addBookToLibrary("The Lord of The Rings", "J.R.R Tolkien", 1222, "Not Read");
addBookToLibrary("The Hunger Games: The Ballad of Songbirds and Snakes", "Suzanne Collins", 528, "Read");
displayBooks(0)
displayBooks(1)
displayBooks(0)
displayBooks(1)



// Event Delegation / Listening

const displayContainer = document.querySelector(".display-container");
displayContainer.addEventListener("click", (x) => {
    if (x.target.classList.contains("read-toggle")) {
        if (x.target.classList.contains("read")) {
            x.target.classList.replace("read", "notread");
            x.target.textContent = "Not Read";
            x.target.read = "Not Read";
        } else {
            x.target.classList.replace("notread", "read");
            x.target.textContent = "Read";
            x.target.read = "Read";
        }
    }
})


// Dialog JS
const addBookBtn = document.querySelector("#add-book");
const newBookDialog = document.querySelector("#new-book-dialog");
const newBookForm = document.querySelector("#new-book-dialog form");
addBookBtn.addEventListener("click", () => {
    newBookDialog.showModal();
})

const confirmBtn = document.querySelector("#confirm-button");
confirmBtn.addEventListener("click", (event) => {
    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author");
    const bookPages = document.querySelector("#book-pages");
    let bookRead;
    if (document.querySelector("#book-read").checked) {
        bookRead = "Read";
    } else {
        bookRead = "Not Read";
    }
    event.preventDefault();
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead);
    myLibrary.push(newBook);
    displayBooks(myLibrary.length - 1);
    newBookForm.reset();
    newBookDialog.close();
})