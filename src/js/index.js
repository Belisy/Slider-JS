import '../css/style.css';

const swiper = new Swiper('.container .swiper', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false, // 클릭시 자동멈춤 해체
  },
  loop: true,
  pagination: {
    el: '.container .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const $stop = document.querySelector('.pause');
const $play = document.querySelector('.play_arrow');

$stop.addEventListener('click', e => {
  e.target.classList.add('none');
  $play.classList.remove('none');
  swiper.autoplay.stop();
});
$play.addEventListener('click', e => {
  e.target.classList.add('none');
  $stop.classList.remove('none');
  swiper.autoplay.start();
});
