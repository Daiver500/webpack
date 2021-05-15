(function () {

  const scrollButtons = document.querySelectorAll(".main__scroller");
  const footerContacts = document.querySelector(".footer__contacts");
  const mainForm = document.querySelector(".form__main");
  const aboutHeader = document.querySelector(".about__header");

  const scrollButtonsClickHandler = (evt) => {
    switch (evt.target.id) {
      case "up-contacts":
        footerContacts.scrollIntoView({
          behavior: "smooth"
        });
        break;
      case "up-button":
        mainForm.scrollIntoView({
          behavior: "smooth"
        });
        break;
      case "upscroll-button":
        aboutHeader.scrollIntoView({
          behavior: "smooth"
        });
        break;
    }
  }

  scrollButtons.forEach((button) => {
    button.addEventListener("click", scrollButtonsClickHandler)
  });
})();
