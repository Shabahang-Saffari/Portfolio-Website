import Navlinks from "./Navlinks";
import { useGlobalContext } from "../../Context";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  const {
    nav_menu,
    toggle_theme,
    dark_mode,
    toggle_nav_menu,
    hover_on_available,
    exit_available_hover,
    hover_btns,
    hover_btns_exit,
  } = useGlobalContext();

  // **************   Available btn   *******************

  const cursor_hover_handler = () => {
    hover_on_available();
  };

  const cursor_exit_hover_handler = () => {
    exit_available_hover();
  };

  // **************   Theme Mode   *******************

  const toggle_theme_handler = () => {
    toggle_theme();
  };

  const links_cursor_hover_handler = () => {
    hover_btns();
  };

  const links_cursor_exit_hover_handler = () => {
    hover_btns_exit();
  };

  // **************   NavLinks menu btn   *************
  const nav_menu_btn_handler = () => {
    toggle_nav_menu();
  };

  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="available_status_wrapper">
          <motion.a
            href="#contact"
            className="available_status"
            onMouseOver={cursor_hover_handler}
            onMouseLeave={cursor_exit_hover_handler}
            whileHover={{
              y: -6,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Available to join your team
          </motion.a>
        </div>

        <div className="theme_mode_wrapper">
          <div className="white_effect"></div>
          <motion.div
            className="theme_mode_btn"
            onClick={toggle_theme_handler}
            onMouseOver={links_cursor_hover_handler}
            onMouseLeave={links_cursor_exit_hover_handler}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.1,
              y: -6,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            {dark_mode ? "Night" : "Day"}
          </motion.div>
        </div>
        <div className="navlinks_btn_wrapper">
          <AnimatePresence>{nav_menu && <Navlinks />}</AnimatePresence>

          <motion.div
            className="nav_btn_wrapper"
            onClick={nav_menu_btn_handler}
            whileHover={{
              scale: 1.4,
            }}
          >
            <span className={nav_menu ? "menu_btn close" : "menu_btn"}></span>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
