import Navlinks from "./Navlinks";
import { LuPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="availability_status">Available to join your team</div>
        <div className="theme_mode">Night</div>
        {true ? (
          <div className="menu_btn_wrapper">
            <button className="menu_btn">
              <LuPlus />
            </button>
          </div>
        ) : (
          <Navlinks />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
