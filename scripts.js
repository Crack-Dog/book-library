const myLibrary = ['book1', 'book2', 'book3'];

function Book() {
    pass;
}

function addBook() {
    pass;
}

function bookDisplay(bookArray) {
    console.log("hi")
    for (let i = 0; i < bookArray.length; i++) {
        const bookContainer = document.querySelector(".container");
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("books");
        bookInfo.textContent = `${bookArray[i]}`;
        bookContainer.appendChild(bookInfo);

        console.log(bookArray[i]);
    }
}

bookDisplay(myLibrary);