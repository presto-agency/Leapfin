
export const lazyLoad = () => {
  if (window.innerWidth >= 1200) {
    document.addEventListener("DOMContentLoaded", () =>{
      const images = document.querySelectorAll('img[data-src]');
      const sources = document.querySelectorAll('source[data-srcset]');

      for (let i = 0; i < images.length; i++) {
        let dataSrc = images[i].getAttribute('data-src');
        images[i].setAttribute('src', dataSrc);
        images[i].removeAttribute('data-src');
      }

      for (let i = 0; i < sources.length; i++) {
        let dataSrcSet = sources[i].getAttribute('data-srcset');
        sources[i].setAttribute('srcset', dataSrcSet);
        sources[i].removeAttribute('data-srcset');
      }
    })
  }
};