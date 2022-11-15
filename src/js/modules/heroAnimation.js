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
