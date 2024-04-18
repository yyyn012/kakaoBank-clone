// const nav = document.querySelector(".nav");

const listBtn = document.querySelectorAll(".list-btn");
const listTitle = document.querySelectorAll(".list-title");
const arrowIcon = document.querySelectorAll(".list-btn > i");
const onClass = document.querySelectorAll(".on");
const content = document.querySelectorAll(".content");

const contentList = document.querySelectorAll(".content > li");

listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onClass[index].classList.contains("on")) {
      onClass[index].classList.remove("on");
      // arrowIcon.innerHTML = "" += "<i class='fas fa-chevron-up'></i>";
    } else {
      onClass[index].classList.add("on");
      // arrowIcon.innerHTML = "" += "<i class='fas fa-chevron-down'></i>";
    }
  });
});

listTitle.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (listTitle[index].classList.contains("border-none")) {
      listTitle[index].classList.remove("border-none");
    } else {
      console.log(listTitle[index]);
      listTitle[index].classList.add("border-none");
    }
  });
});

contentList.forEach(() => {
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].classList.add("list-item");
  }
});
