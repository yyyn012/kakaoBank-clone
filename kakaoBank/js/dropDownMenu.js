const listBtn = document.querySelectorAll(".list-btn");
const listTitle = document.querySelectorAll(".list-title");
const arrowIcon = document.querySelectorAll(".list-btn > i");
const onClass = document.querySelectorAll(".on");
const content = document.querySelectorAll(".content");
const contentList = document.querySelectorAll(".content > li");
const fold = document.getElementById("fold");

// listBtn 클릭 시 on클래스 제거로 contentList 보여지게 하기

listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onClass[index].classList.contains("on")) {
      onClass[index].classList.remove("on");
    } else {
      onClass[index].classList.add("on");
    }
  });
});

// arrow icon fold
listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onClass[index].classList.contains("on")) {
      console.log(onClass[index].fold);
      fold.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
    } else {
      fold.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
    }
  });
});

// listTitle 클릭 시 border-bottom 사라짐
listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (listBtn[index].classList.contains("border-none")) {
      listBtn[index].classList.remove("border-none");
    } else {
      listBtn[index].classList.add("border-none");
    }
  });
});

// list-item에 클래스 추가
contentList.forEach(() => {
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].classList.add("list-item");
  }
});
