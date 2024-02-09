import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="nav_wrapper">
      <div className="nav_content">
        <div className="availability_status">Available to join your team</div>
        <div className="logo">Night</div>
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
