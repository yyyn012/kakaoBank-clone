const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

// body scroll 시 header background color 바뀌게 하기
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
