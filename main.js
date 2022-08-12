let menuEmail = document.querySelector(".navbar-email");
let DesktopMenu =  document.querySelector(".desktop-menu");


menuEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){

   DesktopMenu.classList.toggle("inactive")
}
