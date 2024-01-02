// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const header = document.querySelector(".header");

header.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn-mobile-nav");

  if (!btn) return;

  header.classList.toggle("nav-open");
});

// Close mobile nav on link click
const mobileNav = document.querySelector(".main-nav-list");

mobileNav.addEventListener("click", function (e) {
  const btn = e.target.closest(".main-nav-link");
  if (btn.classList.contains("main-nav-link")) {
    header.classList.remove("nav-open");
  }
});

// Sticky Nav
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null, //viewport
    threshold: 0, //fires when 0% in viewport
    rootMargin: "-80px", //adjusts for height of nav which is 80px
  }
);

obs.observe(sectionHeroEl);
