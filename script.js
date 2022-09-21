const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#btn-add-book");
const closeModalBtn = document.querySelector("#close-modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

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