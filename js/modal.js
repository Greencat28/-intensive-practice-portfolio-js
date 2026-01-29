const modalButtons = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeButton = modal.querySelector(".modal__close");

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

const closeModal = (elem) => {
  elem.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

closeModal(overlay);
closeModal(closeButton);
