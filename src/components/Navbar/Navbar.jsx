const Navbar = () => {
  return (
    <>
      <nav className="font-dm-sans">
        {/* nav top */}
        <div className="container">
          <div className="flex items-center py-[32px]">
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

        {/* nav bottom */}
        <div className="py-[25px] bg-grayLight">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <a href="#" className="flex items-center gap-x-[11px]">
                  <picture>
                    <img src="./category_icon.svg" alt="category" />
                  </picture>
                  <span>Shop by Category</span>
                </a>
              </div>

              <div className="relative">
                <input
                  className="py-[16px] pl-[21px] pr-[45px] outline-none lg:w-[601px] placeholder:text-[#C4C4C4] placeholder:text-sm text-sm"
                  type="text"
                  placeholder="Search Products"
                />
                <picture className="absolute top-[20px] right-[21px]">
                  <img src="./search.svg" alt="search" />
                </picture>
              </div>

              <div className="flex items-center gap-x-[41px]">
                <div>
                  <a href="#">
                    <picture>
                      <img
                        src="./user_profile_with_dropdown.svg"
                        alt="profile"
                      />
                    </picture>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <picture>
                      <img src="./cart.svg" alt="cart" />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
