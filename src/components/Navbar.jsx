import Navlinks from "./Navlinks";
// import { LuPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="availability_status">Available to join your team</div>
        <div className="theme_mode">Night</div>
        {true ? (
          <div className="menu_btn_wrapper">
            <span className={true ? "menu_btn" : "menu_btn close"}></span>
          </div>
        ) : (
          <Navlinks />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
