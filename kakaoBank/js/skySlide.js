// box 클래스를 가진 DOM 요소들의 NodeList를 반환
const section7 = document.querySelectorAll(".section7");

// 영역 감지되면 실행될 콜백
const animateBox = function (entries, observer) {
  // Destructuring
  const [{ isIntersecting, target }] = entries;

  // 만약 영역 감지가 true라면 class 추가, 아니면 제거
  if (isIntersecting) {
    target.classList.add("blue");
  } else {
    target.classList.remove("blue");
  }
};

// intersection observer 생성자 초기화 (관찰자)
const io = new IntersectionObserver(animateBox, {
  root: null,
  threshold: 0.5,
});

// NodeList의 각 요소들 감시 시작
boxes.forEach((e) => {
  io.observe(e);
});
