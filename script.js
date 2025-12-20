// Mobile Menu Toggle
const openBtn = document.querySelector(".mobile-toggle");
const panel = document.querySelector(".mobile-panel");
const closeBtn = document.querySelector(".mobile-close");
const mobileLinks = document.querySelectorAll(".mobile-link");

openBtn.addEventListener("click", () => {
  panel.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("open");
  document.body.style.overflow = ""; // Restore scrolling
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    panel.classList.remove("open");
    document.body.style.overflow = ""; // Restore scrolling
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a, .mobile-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Set home as active on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.nav a[href="#home"]')?.classList.add("active");
});
