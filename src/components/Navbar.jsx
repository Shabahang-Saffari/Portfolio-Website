import Navlinks from "./Navlinks";
import { useGlobalContext } from "../Context";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { nav_menu, toggle_nav_menu } = useGlobalContext();
  const nav_menu_btn_handler = () => {
    toggle_nav_menu();
  };
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="availability_status">Available to join your team</div>
        <div className="theme_mode">Night</div>
        <div className="navlinks_btn_wrapper">
          <AnimatePresence>{nav_menu && <Navlinks />}</AnimatePresence>

          <div className="nav_btn_wrapper" onClick={nav_menu_btn_handler}>
            <span className={nav_menu ? "menu_btn close" : "menu_btn"}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
