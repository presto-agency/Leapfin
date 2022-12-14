export const scrollerColors = (elementsPage) => {

  if (elementsPage.length > 0) {
    window.addEventListener("scroll", scrolling, false);

    function scrolling() {
      elementsPage.forEach(el => {
        if (isFullyVisible(el)) {
          let idEl = el.id;
          const activeBtns = document.querySelectorAll('.active-color');
          let btns = document.querySelectorAll(`a[href='#${idEl}']`);
          changeClass(activeBtns, btns)
        }
      });
    }

    function changeClass(activeBtns, els) {
      activeBtns.forEach(aBtn => {
        aBtn.classList.remove('active-color')
      });
      els.forEach(el => {
        el.classList.add('active-color')
      });
    }

    function isFullyVisible(el) {
      let topOfElements = el.getBoundingClientRect().top;
      let bottomOfElements = el.getBoundingClientRect().bottom;
      return (((topOfElements <= 200) && (bottomOfElements > 0)));
    }

    scrolling();
  }
};