export const filterItems = () => {
  let elementsLink = document.querySelectorAll('.trigger-filter');
  if (elementsLink.length > 0) {
    elementsLink.forEach(link => link.addEventListener('change', function () {
      let attr = this.getAttribute('data-attr');
      let thisItems = document.querySelectorAll(`[data-group = ${attr}]`);
      const obj = document.querySelector('.prebuilt__content');
      const yOffset = -80;
      if (!this.checked) {
        thisItems.forEach(
          el => {
            el.classList.add('hide-item')
          }
        )
        const y = obj.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      } else {
        thisItems.forEach(
          el => {
            el.classList.remove('hide-item')
          }
        )
        const y = obj.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }))
  }
}