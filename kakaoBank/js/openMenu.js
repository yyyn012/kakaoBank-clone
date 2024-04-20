const html = document.querySelector("html");
const body = document.querySelector("body");
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");

// menu open 시 navBtn x로 바뀌게 하기, menu hidden 제거, body scroll 제거
function openMenu() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    navBtn.classList.remove("active");
    html.classList.remove("noScroll");
    body.classList.remove("noScroll");
  } else {
    nav.classList.add("active");
    navBtn.classList.add("active");
    html.classList.add("noScroll");
    body.classList.add("noScroll");
  }
}

navBtn.addEventListener("click", openMenu);
