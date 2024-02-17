import Navlinks from "./Navlinks";
import { useState } from "react";
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
  } = useGlobalContext();

  const nav_menu_btn_handler = () => {
    toggle_nav_menu();
  };

  const toggle_theme_handler = () => {
    // ** after 2s **
    toggle_theme();
  };

  const cursor_hover_handler = () => {
    hover_on_available();
  };

  const cursor_exit_hover_handler = () => {
    exit_available_hover();
  };

  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="available_status_wrapper">
          <motion.div
            className="available_status"
            onMouseOver={cursor_hover_handler}
            onMouseLeave={cursor_exit_hover_handler}
            whileHover={{
              y: -3,
              textShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Available to join your team
          </motion.div>
        </div>

        <div className="theme_mode_wrapper">
          <div className="white_effect"></div>
          <div onClick={toggle_theme_handler} className="theme_mode_btn">
            {dark_mode ? "Night" : "Day"}
          </div>
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
