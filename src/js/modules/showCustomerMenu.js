export const showCustomerMenu = (menu, objects, topValue, bottomValue) => {
  if (menu) {
    window.addEventListener("scroll", scrolling, false);

    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      return ((top <= topValue) && (bottom >= bottomValue));
    }

    function scrolling() {
      if (isFullyVisible(objects)) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    }

    scrolling();
  }
};
