const NavbarTop = () => {
  return (
    <div className="container">
      <div className="flex items-center sm:flex-row flex-col gap-y-5 py-[32px]">
        <div>
          <picture>
            <img src="./logo.png" alt="OREBI" />
          </picture>
        </div>
        <div className="w-full">
          <ul className="flex items-center justify-center sm:gap-x-[40px] gap-x-[20px]">
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
  );
};

export default NavbarTop;
