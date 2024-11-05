//navbar 고정
const headerTop = document.getElementById('header-top');
window.addEventListener('scroll', () => {
  if (window.scrollY >= headerTop.offsetHeight) {
    headerTop.style.position = 'fixed';
  } else {
    headerTop.style.position = 'static';
  }
});

//메인화면 이미지 슬라이드
const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageWidth = 1200;
const totalImages = 3;
let currentSlide = 0;
function updateSlidePosition() {
  slideContainer.style.transform = `translateX(${
    -currentSlide * imageWidth
  }px)`;
  if (currentSlide === 0) {
    prevBtn.style.color = 'gray';
    prevBtn.style.cursor = 'default';
  } else if (currentSlide === totalImages - 1) {
    nextBtn.style.color = 'gray';
    nextBtn.style.cursor = 'default';
  } else {
    prevBtn.style.color = 'yellow';
    prevBtn.style.cursor = 'pointer';
    nextBtn.style.color = 'yellow';
    nextBtn.style.cursor = 'pointer';
  }
}
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
  }
});
nextBtn.addEventListener('click', () => {
  if (currentSlide < totalImages - 1) {
    currentSlide++;
    updateSlidePosition();
  }
});
updateSlidePosition();
