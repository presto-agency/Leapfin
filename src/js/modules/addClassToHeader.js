export const addClassHeader = () => {
  const cross = document.querySelector('.header__content_cross');
  const header = document.querySelector('.header');
  cross.onclick = () => {
    header.classList.toggle('active')
  }
}