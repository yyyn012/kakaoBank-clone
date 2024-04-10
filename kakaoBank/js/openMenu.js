const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");

function openMenu() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    navBtn.classList.remove("active");
  } else {
    nav.classList.add("active");
    navBtn.classList.add("active");
  }
}

navBtn.addEventListener("click", openMenu);
