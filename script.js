const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const bookDisplay = document.querySelector(".book-display");
    for (let book of myLibrary) {
        bookDisplay.textContent += book.info();
    }
}


addBookToLibrary("Lord of The Rings", "J.R.R Tolkien", 295, "not read yet");
addBookToLibrary("Ballad of Songbirds and Snakes", "Suzanne Collins", 492, "read");
displayBooks()