const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");

function openMenu() {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

function noScroll() {
  document.body.classList.add("no-scroll");
}
