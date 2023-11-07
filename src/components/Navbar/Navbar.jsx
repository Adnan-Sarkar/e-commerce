const Navbar = () => {
  return (
    <>
      <nav className="py-[32px] font-dm-sans">
        <div className="container">
          <div className="flex items-center">
            <div>
              <picture>
                <img src="./logo.png" alt="OREBI" />
              </picture>
            </div>
            <div className="w-full">
              <ul className="flex items-center justify-center gap-x-[40px]">
                <li>
                  <a className="text-primary text-[14px] font-bold" href="#">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="text-secondary text-[14px]" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-secondary text-[14px]" href="#">
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="text-secondary text-[14px]" href="#">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
