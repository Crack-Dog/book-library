const bookContainer = document.querySelector(".container");
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
    let readBool = newBook.querySelector('input[name=readBool]:checked');

    if (readBool === null){
        readBool = false;
    } else{
        readBool = true;
    }

    const book = new bookObj(titleName.value, authorName.value, numPages.value, readBool);
    let bookInfo = document.createElement("div");
    bookInfo.setAttribute('id', `book${bookNum+1})`);
    bookInfo.textContent = `${book.info()}`
    const bookButton = document.createElement("button");
    bookButton.setAttribute('id', `remove${bookNum+1}`);
    bookButton.textContent = "Remove"
    const readButton = document.createElement("button");
    readButton.setAttribute('id', `read${bookNum+1}`)
    if (bookInfo.read === true){
        readButton.textContent = 'Read'
    } else{
        readButton.textContent = 'Unread'
    }
    bookButton.addEventListener("click", () => {
        bookInfo.remove(bookButton.parentElement.id)
        });

    readButton.addEventListener("click", () => {
        if (readButton.textContent === 'Read'){
            readButton.textContent = 'Unread';
        } else{
            readButton.textContent = 'Read'
        }
        });

    bookContainer.appendChild(bookInfo);
    bookInfo.appendChild(bookButton);
    bookInfo.appendChild(readButton);
    myLibrary.push(book);
})

function bookDisplay(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        let bookInfo = document.createElement("div");
        bookInfo.setAttribute('id', `book${bookNum+1}`);
        bookInfo.textContent = `${bookArray[i].info()}`;
        bookContainer.appendChild(bookInfo);
        
        let bookDisplay = document.querySelector(`#book${bookNum+1}`);
        const bookButton = document.createElement("button");
        bookButton.setAttribute('id', `remove${bookNum+1}`);
        bookButton.textContent = "Remove"

        const readButton = document.createElement("button");
        readButton.setAttribute('id', `read${bookNum+1}`)
        if (bookArray[i].read === true){
            readButton.textContent = 'Read'
        } else{
            readButton.textContent = 'Unread'
        }

        bookDisplay.appendChild(bookButton);
        bookDisplay.appendChild(readButton);

        bookNum = bookNum + 1

        bookButton.addEventListener("click", () => {
            bookInfo.remove(bookButton.parentElement.id)
            });

        readButton.addEventListener("click", () => {
            if (readButton.textContent === 'Read'){
                readButton.textContent = 'Unread';
            } else{
                readButton.textContent = 'Read'
            }
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


