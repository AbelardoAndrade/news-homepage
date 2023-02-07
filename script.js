var menuButton = document.querySelector(".mobile-menu-icon");
var mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    document.querySelector(".icon").src = "./assets/images/icon-menu.svg";
  } else {
    mobileMenu.classList.add("open");
    document.querySelector(".icon").src = "./assets/images/icon-menu-close.svg";
  }
});

function menuShow() {
  let mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    document.querySelector(".icon").src = "./assets/images/icon-menu.svg";
  } else {
    mobileMenu.classList.add("open");
    document.querySelector(".icon").src = "./assets/images/icon-menu-close.svg";
  }
}
