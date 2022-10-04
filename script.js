const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#btn-add-book");
const closeModalBtn = document.querySelector("#close-modal");

const bookContainer = document.querySelector("#book-container");
const submitBtn = document.querySelector("#btn-submit");

// library array
let myLibrary = [];

// get book info
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// create book card
submitBtn.addEventListener("click", () => {

    let bookCard = new BookCard();
    bookCard.createBookCard();
    bookCard.createBookInfo();
    bookCard.createBookCardBtns();

    closeModal();
    let book = new Book();
    book.addBookToLibrary();
    clearInputArea();

});

// delete book card
window.addEventListener("click", (e) => {

    // find delete button's card index.
    if (e.target.className.includes("btn-delete")) {

        // child is book card
        const child = e.target.parentElement.parentElement;
        // parent is book container
        const parent = child.parentElement;

        let index = Array.prototype.indexOf.call(parent.children, child);

        deleteBookCard(index);
        console.log(myLibrary);
    }

})

// change book card read condition
window.addEventListener("click", (e) => {

    // find read button's card index
    if (e.target.className.includes("btn-isRead")) {

        // child is book card
        const child = e.target.parentElement.parentElement;
        // parent is book container
        const parent = child.parentElement;

        let index = Array.prototype.indexOf.call(parent.children, child);

        changeReadCondition(index, e);
        console.log(myLibrary);
    }
})

class BookCard {

    constructor() {
        // create card elements
        this.bookCard = document.createElement("div");
        this.bookTitle = document.createElement("p");
        this.bookAuthor = document.createElement("p");
        this.bookPages = document.createElement("p");
        this.bookCardBtn = document.createElement("div");
        this.isReadBtn = document.createElement("button");
        this.deleteBtn = document.createElement("button");
    }

    createBookCard() {
        this.bookCard.classList.add("book-card");
        bookContainer.appendChild(this.bookCard);
    }

    createBookInfo() {

        // book title
        this.bookTitle.classList.add("book-card-text", "book");
        this.bookTitle.innerHTML =
            `' ${document.querySelector("#title").value} '`;

        // author
        this.bookAuthor.classList.add("book-card-text", "author");
        this.bookAuthor.innerHTML =
            `by ${document.querySelector("#author").value}`;

        // page number
        this.bookPages.classList.add("book-card-text", "pages");
        this.bookPages.innerHTML =
            `${document.querySelector("#pages").value} pages`;


        this.bookCard.appendChild(this.bookTitle);
        this.bookCard.appendChild(this.bookAuthor);
        this.bookCard.appendChild(this.bookPages);

    }

    createBookCardBtns() {

        // button container
        this.bookCardBtn.classList.add("book-card-btn-group");

        // isRead button
        this.isReadBtn.classList.add("book-card-btn", "btn-isRead");

        // control whether the book is read
        if (document.querySelector("#isRead").checked) {
            this.isReadBtn.innerHTML = "Read";
            this.isReadBtn.style.backgroundColor = "rgb(0,128,0)";
        } else {
            this.isReadBtn.innerHTML = "Not read";
            this.isReadBtn.style.backgroundColor = "rgb(158,13,13)";
        }

        // delete button
        this.deleteBtn.classList.add("book-card-btn", "btn-delete");

        this.deleteBtn.innerHTML = "Delete";

        this.bookCard.appendChild(this.bookCardBtn);
        this.bookCardBtn.appendChild(this.isReadBtn);
        this.bookCardBtn.appendChild(this.deleteBtn);

    }
}

class Book {

    constructor() {
        this.title = document.querySelector("#title").value;
        this.author = document.querySelector("#author").value;
        this.pages = document.querySelector("#pages").value;
        this.isRead = document.querySelector("#isRead").checked;
    }

    addBookToLibrary() {
        myLibrary.push(this);
    }
}

// functions
function openModal() {
    modal.style.display = "block";
    document.querySelector("header").style.filter = "blur(3px)";
    document.querySelector("main").style.filter = "blur(3px)";
    document.querySelector("footer").style.filter = "blur(3px)";
}

function closeModal() {
    modal.style.display = "none";
    document.querySelector("header").style.filter = "blur(0px)";
    document.querySelector("main").style.filter = "blur(0px)";
    document.querySelector("footer").style.filter = "blur(0px)";
}

function clearInputArea() {

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#isRead").checked = false;

}

function deleteBookCard(index) {

    // remove from array
    myLibrary.splice(index, 1);

    // remove from DOM
    bookContainer.removeChild(bookContainer.children[index]);

}

function changeReadCondition(index, e) {

    if (!e) e = window.event;

    if (myLibrary[index].isRead) {
        //change array property
        myLibrary[index].isRead = false;

        // change DOM layout
        e.target.style.backgroundColor = "rgb(158, 13, 13)";
        e.target.innerHTML = "Not read"
    } else {
        // change array property
        myLibrary[index].isRead = true;

        // change DOM layout
        e.target.style.backgroundColor = "rgb(0, 128, 0)";
        e.target.innerHTML = "Read"
    }

}




