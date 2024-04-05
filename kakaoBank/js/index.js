const listTitle = document.querySelectorAll(".list-title");
const content = document.querySelectorAll(".content");
const contentList = document.querySelectorAll(".content > li");
const onConts = document.querySelectorAll(".on");

listTitle.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onConts[index].classList.contains("on")) {
      onConts[index].classList.remove("on");
    } else {
      onConts[index].classList.add("on");
    }
  });
});

contentList.forEach(() => {
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].classList.add("list-item");
  }
});
