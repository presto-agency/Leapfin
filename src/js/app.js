import {addClassHeader} from "./modules/addClassToHeader.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {scrollHeader} from "./modules/scrollHeader.js";
import {callTabs} from "./modules/callTabs.js";
import {showCustomerMenu} from "./modules/showCustomerMenu.js";
import {anchorAnimation} from "./modules/scrollAnchors.js";
import {scrollerColors} from "./modules/scrollerColors.js";

if (window.innerWidth < 1200) {
  addClassHeader()
  callMenu()
  showSubmenu(document.querySelectorAll('.sub-submenu'))
}
scrollHeader()
callTabs()
showSubmenu(document.querySelectorAll('.submenu-questions'));
showCustomerMenu()
anchorAnimation()
scrollerColors()




