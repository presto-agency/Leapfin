export const filterItems = () => {
  let elementsLink = document.querySelectorAll('.trigger-filter');
  if (elementsLink.length > 0) {
    elementsLink.forEach(link => link.addEventListener('change', function () {
      let attr = this.getAttribute('data-attr');
      let thisItems = document.querySelectorAll(`[data-group = ${attr}]`);
      if (!this.checked) {
        thisItems.forEach(
          el => {
            el.classList.add('hide-item')
          }
        )
      } else {
        thisItems.forEach(
          el => {
            el.classList.remove('hide-item')
          }
        )
      }
    }))
  }
}