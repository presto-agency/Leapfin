import Swiper, {Autoplay} from 'swiper';

export const runSwiper = (n) => {
  const sliderHero = new Swiper(`.hero-swiper-${n}`, {
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    direction: "vertical",
    loop: true,
    spaceBetween: 30,
  })

  if (sliderHero.autoplay.running) {
    sliderHero.params.autoplay.delay = 4000;
    sliderHero.update()
  }
}