import Swiper, {Autoplay} from 'swiper';

export const runSwiper = (n) => {
  const sliderHero = new Swiper(`.hero-swiper-${n}`, {
    modules: [Autoplay],
    autoplay: {
      delay: 4000
    },
    direction: "vertical",
    loop: true,
    spaceBetween: 30,
  })
}