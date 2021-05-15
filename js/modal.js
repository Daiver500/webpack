(function () {

const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const mainForm = document.querySelector(".form__main");
const formName = document.querySelector(".form__name")
const formEmail = document.querySelector(".form__email");
const formPhone = document.querySelector(".form__phone");

const modalEscPressHandler = (evt) => {
  if (evt.key === "Escape") {
    closeModal();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target === modal) {
    closeModal();
  }
}

const openModal = () => {
  modal.classList.remove("hidden");
  modal.addEventListener("click", windowClickHandler);
  closeModalButton.addEventListener("click", closeModal)
  document.addEventListener("keydown", modalEscPressHandler);
}

const closeModal = () => {
  modal.classList.add("hidden");
  closeModalButton.removeEventListener("click", closeModal)
  modal.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", modalEscPressHandler);
}


mainForm.addEventListener("submit", function (evt) {
  openModal();
  evt.preventDefault();
  formName.value = "";
  formEmail.value = "";
  formPhone.value = "";
})
})();

