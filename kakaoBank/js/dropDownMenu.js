const listBtn = document.querySelectorAll(".list-btn");
const onClass = document.querySelectorAll(".on");
const content = document.querySelectorAll(".content");

const contentList = document.querySelectorAll(".content > li");

listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onClass[index].classList.contains("on")) {
      onClass[index].classList.remove("on");
    } else {
      onClass[index].classList.add("on");
    }
  });
});

contentList.forEach(() => {
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].classList.add("list-item");
  }
});
