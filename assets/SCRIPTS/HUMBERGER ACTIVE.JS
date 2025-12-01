function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  navLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}
