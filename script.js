// INTERSECTION OBSERVER ANIMATION
// Exclude the hero section so it's visible immediately on load
const animatedElements = document.querySelectorAll(
  "section:not(.hero), .service-card, .skill-item, .step"
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

// SKILL MASTERY (randomized above 85%)
const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach((item) => {
  const skillName = item.dataset.skill;
  const icon = item.dataset.icon;
  const mastery = Math.floor(Math.random() * 14) + 86; // 86% - 99%

  item.innerHTML = `
    <div class="skill-title">
      <span class="skill-name"><i class="${icon}"></i> ${skillName}</span>
      <span class="skill-percent">${mastery}%</span>
    </div>
    <div class="skill-bar" role="progressbar" aria-label="${skillName} mastery" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${mastery}">
      <div class="skill-progress" style="width: ${mastery}%;"></div>
    </div>
  `;
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
