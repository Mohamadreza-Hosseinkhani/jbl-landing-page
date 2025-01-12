import Swiper from "swiper";
import "swiper/css";

//*=============== SWIPER FAVORITES ===============*/
const swiper = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
