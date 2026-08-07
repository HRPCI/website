/* ================= MOBILE MENU ================= */
const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
}
if (menuClose && mobileMenu) {
  menuClose.addEventListener("click", () => mobileMenu.classList.remove("open"));
}
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

/* ================= SLIDESHOW ================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  if (!slides.length) return;
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4500);
}
if (slides.length > 0) showSlides();

/* ================= SCROLL REVEAL ================= */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in"));
}

/* ================= HEADER SHADOW ON SCROLL ================= */
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 6px 20px rgba(11,31,58,.08)" : "none";
  });
}
