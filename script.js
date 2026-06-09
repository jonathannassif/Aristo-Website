// ─────────────────────────────────────────
//  ARISTO — main script
// ─────────────────────────────────────────

// ── 1. MOBILE MENU ──────────────────────
const openBtn = document.querySelector(".mobile-toggle");
const panel = document.querySelector(".mobile-panel");
const closeBtn = document.querySelector(".mobile-close");
const mobileLinks = document.querySelectorAll(".mobile-link");

openBtn.addEventListener("click", () => {
  panel.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeMobileMenu);

mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

function closeMobileMenu() {
  panel.classList.remove("open");
  document.body.style.overflow = "";
}

// ── 2. SCROLL HANDLER (merged + debounced) ──
const scrollToTopBtn = document.getElementById("scrollToTop");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-link");

function onScroll() {
  const y = window.scrollY;

  // Scroll-to-top button visibility
  scrollToTopBtn.classList.toggle("visible", y > 300);

  // Active nav link on scroll
  let current = "";
  sections.forEach((section) => {
    if (y >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
}

// Debounce: only fires after scrolling pauses for 50ms — better performance
let scrollTimer;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(onScroll, 50);
});

// ── 3. SCROLL TO TOP ────────────────────
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ── 4. SET HOME ACTIVE ON LOAD ──────────
document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.querySelector('.desktop-nav a[href="#home"]');
  if (homeLink) homeLink.classList.add("active");
});
