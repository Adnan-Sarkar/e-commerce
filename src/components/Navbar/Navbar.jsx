import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  return (
    <>
      <nav className="font-dm-sans">
        <NavbarTop />
        <NavbarBottom />
      </nav>
    </>
  );
};

export default Navbar;
