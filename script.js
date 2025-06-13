document.querySelector(".btn").addEventListener("click", () => {
  alert("Thank you for clicking!");
});


gsap.from(".ace", { duration: 1, x: 400, opacity: 0 });
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}
