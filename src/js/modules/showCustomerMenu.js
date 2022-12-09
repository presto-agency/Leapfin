export const showCustomerMenu = () => {

  const menu = document.querySelector('.anchor-list.menu');
  if (menu) {
    const objects = document.querySelector('.sections-customers');
    let topValue = 350;
    let bottomValue = 0;
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
