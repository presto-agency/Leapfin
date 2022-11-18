import {addClassHeader} from "./modules/addClassToHeader.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {heroAnimation} from "./modules/heroAnimation.js"
import {scrollHeader} from "./modules/scrollHeader.js";

if(window.innerWidth < 1200){
  addClassHeader()
  callMenu()
  showSubmenu(document.querySelectorAll('.sub-submenu'))
}
if (window.innerWidth >= 1200) {
  heroAnimation()
}
scrollHeader()



