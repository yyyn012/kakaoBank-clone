const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (window.scrollY > headerHeight) {
    header.classList.add("change-white");
  } else {
    header.classList.remove("change-white");
  }
});
