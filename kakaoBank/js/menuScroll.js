const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

// body scroll 시 header background color 바뀌게 하기
const headerScroll = () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

const headerColor = () => {
  header.style.backgroundColor = "#fff";
  header.style.borderBottom = "1px solid e6e3e3";
};

document.addEventListener("scroll", headerScroll);

window.addEventListener("load", headerColor);
