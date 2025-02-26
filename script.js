// Toggle Navigation Links on Hamburger Click
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");


hamburger.addEventListener("click", () => {
  
  navLinks.classList.toggle("active");

});