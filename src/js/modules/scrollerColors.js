export const scrollerColors = (elementsPage) => {

  if (elementsPage.length > 0) {
    window.addEventListener("scroll", function () {
      elementsPage.forEach(el => {
        if (isFullyVisible(el)) {
          let idEl = el.id;
          const activeButton = document.querySelector('.active-color');
          let link = document.querySelector(`a[href='#${idEl}']`);
          if (activeButton !== link && !link.classList.contains('active-color')) {
            changeClass(activeButton, link)
          }
        }
      });
    }, false);

    function changeClass(activeItem, item) {
      if (!!activeItem) {
        activeItem.classList.remove('active-color')
        item.classList.add('active-color')
      } else {
        item.classList.add('active-color')
      }
    }

    function isFullyVisible(el) {
      let topOfElement = el.getBoundingClientRect().top;
      if (topOfElement > 80 && topOfElement < 200) {
        return true
      }
    }
  }
};