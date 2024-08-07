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

function displayBooks() {
    for (let book of myLibrary) {
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
}

addBookToLibrary("Lord of The Rings", "J.R.R Tolkien", 295, "Not Read");
addBookToLibrary("Ballad of Songbirds and Snakes", "Suzanne Collins", 492, "Read");
displayBooks()

// Event Delegation / Listeinng

const displayContainer = document.querySelector(".display-container");
displayContainer.addEventListener("click", (x) => {
    if (x.target.classList.contains("read-toggle")) {
        if (x.target.classList.contains("read")) {
            x.target.classList.replace("read", "notread");
            x.target.textContent = "Not Read";
        } else {
            x.target.classList.replace("notread", "read");
            x.target.textContent = "Read";
        }
    }
})