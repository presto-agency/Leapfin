import {addClassHeader} from "./modules/functions.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";

addClassHeader()
callMenu()
showSubmenu(document.querySelectorAll('.sub-submenu'))


