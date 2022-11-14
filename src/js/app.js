import {addClassHeader} from "./modules/functions.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {heroAnimation} from "./modules/heroAnimation.js"

addClassHeader()
callMenu()
showSubmenu(document.querySelectorAll('.sub-submenu'))
heroAnimation()


