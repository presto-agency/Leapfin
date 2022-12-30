import Swiper, {Navigation, Pagination} from 'swiper';

export const platformSwiper = () => {
  const sliderPlatform = new Swiper('.financial-data__content', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    direction: "vertical",
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
  })
}
