const dialog = document.querySelector("dialog");
const modalButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button")

modalButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

const myLibrary = ['book1', 'book2', 'book3'];

function Book() {
    pass;
}

function addBook() {
    addEventListener()
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