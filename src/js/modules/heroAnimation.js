import lottie from "lottie-web";

export const heroAnimation = () => {
  lottie.loadAnimation({
    container: document.getElementById('hero'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'files/lottie/lottie-home-s.json'
  })
}

export const intAnimation = () => {
  if (window.screen.width < 1200) {
    lottie.loadAnimation({
      container: document.getElementById('integration'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'files/lottie/lottie-home-s.json'
    })
  } else if (window.screen.width >= 1200) {
    lottie.loadAnimation({
      container: document.getElementById('integration'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'files/lottie/lottie-home-xl.json'
    })
  }
}