export const callMenu = () => {
  let triggersOpen = document.querySelectorAll(".trigger");
  let triggersClose = document.querySelectorAll(".sub-close");
  triggersOpen ? triggersOpen.forEach((btn) =>
    btn.addEventListener("click", function () {
      let activeTab = document.querySelector(".active-menu");
      activeTab && activeTab.classList.remove("active-menu");
      let tabAttr = this.getAttribute("data-attr");
      document.getElementById(tabAttr).classList.add("active-menu");
    })
  ) : null;
  triggersClose ? triggersClose.forEach(btnClose =>
    btnClose.addEventListener("click", function () {
      let closeTabAttr = this.getAttribute("data-close");
      document.getElementById(closeTabAttr).classList.remove("active-menu");
    })
  ) : null;
}
