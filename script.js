/* ================= MOBILE MENU ================= */
const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

/* Close menu on link click */
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

/* ================= SLIDESHOW ================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000);
}

if (slides.length > 0) showSlides();
