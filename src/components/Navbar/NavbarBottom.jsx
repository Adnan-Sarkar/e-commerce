const NavbarBottom = () => {
  return (
    <div className="py-[25px] bg-grayLight">
      <div className="container">
        <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-y-5 md:gap-y-0 items-center">
          <div className="order-1">
            <a href="#" className="flex items-center gap-x-[11px]">
              <picture>
                <img src="./category_icon.svg" alt="category" />
              </picture>
              <span>Shop by Category</span>
            </a>
          </div>

          <div className="relative order-3 md:order-2 w-full md:w-auto">
            <input
              className="py-[16px] pl-[21px] pr-[45px] outline-none w-full lg:w-[601px] placeholder:text-[#C4C4C4] placeholder:text-sm text-sm"
              type="text"
              placeholder="Search Products"
            />
            <picture className="absolute top-[20px] right-[21px]">
              <img src="./search.svg" alt="search" />
            </picture>
          </div>

          <div className="flex items-center gap-x-[41px] order-2 md:order-3">
            <div>
              <a href="#">
                <picture>
                  <img src="./user_profile_with_dropdown.svg" alt="profile" />
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
  );
};

export default NavbarBottom;
