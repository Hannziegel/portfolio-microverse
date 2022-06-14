document.querySelector("#mobMenu").addEventListener("click", () => 
{
  document.querySelector(".collapse").classList.toggle("header-menu");
  document.querySelector(".logo").classList.toggle("hide");
  document.querySelector(".burguer-icon").classList.toggle("hide");
  document.querySelector(".close-icon").classList.toggle("hide");
  document.querySelector(".right").classList.toggle("right-menu");
  document.querySelector(".menu-links").classList.toggle("menu-links-menu");
  document.querySelectorAll(".menu-link").forEach(element => element.classList.toggle("menu-link-menu"));
});

// Change the height of Header to cover all screen

// Add hide class to burguer icon and remove hide class to close icon
// close icon float right

// Change display none to display flex in menu-links, add flex-direction column, add border-botton 

// Add hide to logo

// Add hide to message-icon