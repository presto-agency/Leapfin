import {addClassHeader} from "./modules/addClassToHeader.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {heroAnimation} from "./modules/heroAnimation.js"
import {scrollHeader} from "./modules/scrollHeader.js";
import {sectionAnimation} from "./modules/sectionAnimation.js";

addClassHeader()
callMenu()
showSubmenu(document.querySelectorAll('.sub-submenu'))
heroAnimation()
scrollHeader()



