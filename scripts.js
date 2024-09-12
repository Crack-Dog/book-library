
let bookNum = 0

const dialog = document.querySelector("dialog");
const modalButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button")

modalButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

function bookObj(title, author, numPages = 0, read = false){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        const info = `${this.title} by ${this.author}, ${this.numPages} pages, read status: ${read}`
        return info
    }
}

let newBook = document.querySelector("#bookForm");
newBook.addEventListener("submit", (event) => {
    event.preventDefault();

    let titleName = document.getElementById("titleName");
    let authorName = document.getElementById("authorName");
    let numPages = document.getElementById("numPages");
    let readBool = document.getElementById("readBool");

    if (readBool.value === true){
        readBool.value = true
    }
    else{
        readBool.value = false
    }

        const book = new bookObj(titleName.value, authorName.value, numPages.value, readBool.value);
        myLibrary.push(book);
    bookDisplay(myLibrary);
})

function bookDisplay(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        const bookContainer = document.querySelector(".container");
        let bookInfo = document.createElement("div");
        bookInfo.setAttribute('id', `book${bookNum+1}`);
        bookInfo.textContent = `${bookArray[i].info()}`;
        bookContainer.appendChild(bookInfo);
        
        let bookDisplay = document.querySelector(`#book${bookNum+1}`);
        const bookButton = document.createElement("button");
        bookButton.setAttribute('id', `remove${bookNum+1}`);
        bookButton.textContent = "Remove"
        bookDisplay.appendChild(bookButton);
        bookNum = bookNum + 1

        bookButton.addEventListener("click", () => {
            bookInfo.remove(bookButton.parentElement.id)
            });

    }
}


const book1 = new bookObj('test', 'test', 3, true)
const book2 = new bookObj('test2', 'test2', 4, false)
console.log(book1.info());
console.log(book2.info());
const myLibrary = [book1, book2];
console.log(myLibrary[1].info());
bookDisplay(myLibrary);


