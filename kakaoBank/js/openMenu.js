const body = document.querySelector("body");
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const headerColor = document.querySelector(".header");

// menu open 시 navBtn event, menu hidden, body scroll 제거, header backgroundColor white로 변경
function openMenu() {
  if (nav.classList.contains("active")) {
    body.classList.remove("noScroll");
    nav.classList.remove("active");
    navBtn.classList.remove("active");
    headerColor.classList.remove("header-color");
  } else {
    body.classList.add("noScroll");
    nav.classList.add("active");
    navBtn.classList.add("active");
    headerColor.classList.add("header-color");
  }
}

navBtn.addEventListener("click", openMenu);
