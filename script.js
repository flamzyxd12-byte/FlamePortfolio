// INTERSECTION OBSERVER ANIMATION
// Exclude the hero section so it's visible immediately on load
const animatedElements = document.querySelectorAll(
  "section:not(.hero), .service-card, .skill-grid span, .step"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
animatedElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");
const toggleIcon = menuToggle.querySelector("i");

function closeMenu() {
  navMenu.classList.remove("open");
  menuOverlay.classList.remove("active");
  toggleIcon.classList.remove("fa-xmark");
  toggleIcon.classList.add("fa-bars");
}

function openMenu() {
  navMenu.classList.add("open");
  menuOverlay.classList.add("active");
  toggleIcon.classList.remove("fa-bars");
  toggleIcon.classList.add("fa-xmark");
}

menuToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuOverlay.addEventListener("click", closeMenu);

// Close mobile menu when a nav link is clicked
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
