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

    // create card elements
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookCardBtn = document.createElement("div");
    const isReadBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    createBookCard(bookCard);
    createBookInfo(bookCard, bookTitle, bookAuthor, bookPages);
    createBookCardBtns(bookCard,bookCardBtn,isReadBtn,deleteBtn);
    closeModal(); 
    addBookToLibrary();

    console.log(bookContainer.childNodes);

});

window.addEventListener("click", (e) => {

    // Find delete button's card index.
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

function createBookCard(bookCard) {

    bookCard.classList.add("book-card");
    bookContainer.appendChild(bookCard);

}

function createBookInfo(bookCard, bookTitle, bookAuthor, bookPages) {

    // book title
    bookTitle.classList.add("book-card-text", "book");
    bookTitle.innerHTML =
        `' ${document.querySelector("#title").value} '`;

    // author
    bookAuthor.classList.add("book-card-text", "author");
    bookAuthor.innerHTML =
        `by ${document.querySelector("#author").value}`;

    // page number
    bookPages.classList.add("book-card-text", "pages");
    bookPages.innerHTML =
        `${document.querySelector("#pages").value} pages`;


    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);

}

function createBookCardBtns(bookCard,bookCardBtn,isReadBtn,deleteBtn) {

    // button container
    bookCardBtn.classList.add("book-card-btn-group");

    // isRead button
    isReadBtn.classList.add("book-card-btn", "btn-isRead");

    // control whether the book is read
    if (document.querySelector("#isRead").checked) {
        isReadBtn.innerHTML = "Read";
        isReadBtn.style.backgroundColor = "rgb(0,128,0)";
    } else {
        isReadBtn.innerHTML = "Not read";
        isReadBtn.style.backgroundColor = "rgb(158,13,13)";
    }

    // delete button
    deleteBtn.classList.add("book-card-btn", "btn-delete");

    deleteBtn.innerHTML = "Delete";

    bookCard.appendChild(bookCardBtn);
    bookCardBtn.appendChild(isReadBtn);
    bookCardBtn.appendChild(deleteBtn);

}

function deleteBookCard(index) {
        
    myLibrary.splice(index,1);
        
}

// constructor function
function Book(title, author, pages, isRead) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
}

function addBookToLibrary() {

    const book = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#isRead").checked
    );

    myLibrary.push(book);

    console.log(myLibrary);
}
