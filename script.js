document.querySelector("#mobMenu").addEventListener("click", () => {
  mobileMenu();
});
document.querySelector(".menu-links").addEventListener("click", () => {
  mobileMenu();
});

function mobileMenu() {
  // Change the height of Header to cover all screen
  document.querySelector(".collapse").classList.toggle("header-menu");
  // Add hide class to burguer-icon, logo and remove for .close-icon
  document.querySelector(".logo").classList.toggle("hide");
  document.querySelector(".burguer-icon").classList.toggle("hide");
  document.querySelector(".close-icon").classList.toggle("hide");
  // Change display none to display flex in menu-links, add flex-direction column, add border-botton
  document.querySelector(".right").classList.toggle("right-menu");
  document.querySelector(".menu-links").classList.toggle("menu-links-menu");
  document
    .querySelectorAll(".menu-link")
    .forEach((element) => element.classList.toggle("menu-link-menu"));
}
