const prev = document.body.querySelector(".prev");
const next = document.body.querySelector(".next");
let slideNumber = 0;
prev.addEventListener("click", () => {
  minusSlide(-1);
});
next.addEventListener("click", () => {
  plusSlide(+1);
});
document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", function () {
    if (dot.classList.contains("dot0")) {
      showSlide(0);
    } else if (dot.classList.contains("dot1")) {
      showSlide(1);
    } else if (dot.classList.contains("dot2")) {
      showSlide(2);
    } else {
      showSlide(3);
    }
  });
});
showSlide(0);

function minusSlide(n) {
  showSlide((slideNumber += n));
}

function plusSlide(n) {
  showSlide((slideNumber += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  slideNumber = n;
  if (slideNumber < 0) {
    slideNumber = 3;
  }
  if (slideNumber > 3) {
    slideNumber = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideNumber].style.display = "block";
  dots[slideNumber].classList.add("active");
}
setInterval(() => {
  plusSlide(+1);
}, 5000);
