import {addClassHeader} from "./modules/addClassToHeader.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {scrollHeader} from "./modules/scrollHeader.js";
import {callTabs} from "./modules/callTabs.js";
import {showCustomerMenu} from "./modules/showCustomerMenu.js";
import {scrollAnchors} from "./modules/scrollAnchors.js";
import {scrollerColors} from "./modules/scrollerColors.js";

if (window.innerWidth < 1200) {
  addClassHeader()
  callMenu()
  showSubmenu(document.querySelectorAll('.sub-submenu'))
}
scrollHeader()
callTabs()
const customersFunction = () => {
  const menu = document.querySelector('.anchor-list.menu');
  const objects = document.querySelector('.sections-customers');
  let topValue = 350;
  let bottomValue = 0;
  showCustomerMenu(menu, objects, topValue, bottomValue)
}
customersFunction();

scrollAnchors(document.querySelectorAll('a[href*="#"]'));
scrollerColors(document.querySelectorAll('.section-trigger-color'));
showSubmenu(document.querySelectorAll('.submenu-questions'));




