const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#btn-add-book");
const closeModalBtn = document.querySelector("#close-modal");

const bookContainer = document.querySelector("#book-container");
const submitBtn = document.querySelector("#btn-submit");

// get book info
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", closeModal);

// create book card
submitBtn.addEventListener("click", () => {

    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookCardBtn = document.createElement("div");
    const isReadBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    createBookCard(bookCard),
        createBookInfo(bookCard, bookTitle, bookAuthor, bookPages),
        createBookCardBtns(bookCard,bookCardBtn,isReadBtn,deleteBtn)
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
    bookTitle.classList.add("book-card-text");
    bookTitle.innerHTML =
        `' ${document.querySelector("#title").value} '`;

    // author
    bookAuthor.classList.add("book-card-text");
    bookAuthor.innerHTML =
        `by ${document.querySelector("#author").value}`;

    // page number
    bookPages.classList.add("book-card-text");
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
    isReadBtn.classList.add("book-card-btn");
    isReadBtn.setAttribute("id", "btn-isRead");

    // control whether the book is read
    if (document.querySelector("#isRead").checked) {
        isReadBtn.innerHTML = "Read";
        isReadBtn.style.backgroundColor = "rgb(0,128,0)";
    } else {
        isReadBtn.innerHTML = "Not read";
        isReadBtn.style.backgroundColor = "rgb(158,13,13)";
    }

    // delete button
    deleteBtn.classList.add("book-card-btn");
    deleteBtn.setAttribute("id", "btn-delete");
    deleteBtn.innerHTML = "Delete";

    bookCard.appendChild(bookCardBtn);
    bookCardBtn.appendChild(isReadBtn);
    bookCardBtn.appendChild(deleteBtn);

}

