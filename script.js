document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".mobile-nav").style.display = "flex";
});
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener(
    "click",
    () => (document.querySelector(".mobile-nav").style.display = "none")
  );
});
