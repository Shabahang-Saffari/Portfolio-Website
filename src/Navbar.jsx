import Navlinks from "./Navlinks";
import { LuPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="availability_status">Available to join your team</div>
        <div className="logo">Night</div>
        {true ? (
          <button className="menu_btn">
            <LuPlus />
          </button>
        ) : (
          <Navlinks />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
