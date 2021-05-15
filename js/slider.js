const slides = document.querySelectorAll(".slide");
const slide = document.querySelector(".slide");
const buttonRight = document.querySelector(".slider__button--right");
const buttonLeft = document.querySelector(".slider__button--left");
const slidesField = document.querySelector(".slider__wrapperinner");
width = window.getComputedStyle(slide).width;

let offset = 0;

buttonRight.addEventListener("click", () => {
  if (offset === +width.slice(0, width.length - 2) * (slides.length - 2)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(-${offset}px )`
})

buttonLeft.addEventListener("click", () => {
  if (offset === 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 2)
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(+${offset}px )`
})



