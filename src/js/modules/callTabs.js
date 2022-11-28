export const callTabs = () => {
  let elementsLink = document.querySelectorAll('.trigger-tab');
  let tabsBtns = document.querySelectorAll('.tabs__items > li');
  const tabs = document.querySelector('.tabs__body');
  const menu = document.querySelector('.tabs__items');
  elementsLink.forEach(link => link.addEventListener('click', function () {
    let attr = this.getAttribute('data-attr');
    let activeBtn = tabs.querySelector('.active');
    let subWindow = document.getElementById(attr);
    activeBtn.classList.remove('active');
    subWindow.classList.add('active');
  }))
  tabsBtns.forEach(btn => btn.addEventListener('click', function () {
    const activeBtn = menu.querySelector('.active');
    if (!!activeBtn) {
      activeBtn.classList.remove('active')
      btn.classList.add('active')
    } else {
      btn.classList.add('active')
    }
  }))
}