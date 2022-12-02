import {addClassHeader} from "./modules/addClassToHeader.js";
import {callMenu} from "./modules/addSubmenuClass.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {scrollHeader} from "./modules/scrollHeader.js";
import {callTabs} from "./modules/callTabs.js";
import {googleMap} from "./modules/googleMap.js";

if(window.innerWidth < 1200){
  addClassHeader()
  callMenu()
  showSubmenu(document.querySelectorAll('.sub-submenu'))
}
scrollHeader()
callTabs()
googleMap()
showSubmenu(document.querySelectorAll('.submenu-questions'));




