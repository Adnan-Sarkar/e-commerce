const Footer = () => {
  return (
    <>
      <footer className="font-dm-sans bg-grayLight pt-[55px] pb-[52px]">
        <div className="container">
          <div className="flex lg:gap-x-[275px]">
            <div className="flex items-start gap-x-[143px]">
              <div>
                <h4 className="text-primary text-[16px] font-bold leading-[23px] mb-[17px]">
                  MENU
                </h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Journal
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary text-[16px] font-bold leading-[23px] mb-[17px]">
                  SHOP
                </h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Category 4
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Category 5
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary text-[16px] font-bold leading-[23px] mb-[17px]">
                  HELP
                </h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Special E-shop
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-secondaryLight text-sm leading-[23px]"
                      href="#"
                    >
                      Secure Payments
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  className="text-primary text-[16px] font-bold leading-[27px] block"
                  href="#"
                >
                  (052) 611-5711
                </a>
                <a
                  className="text-primary text-[16px] font-bold leading-[27px] block"
                  href="#"
                >
                  company@domain.com
                </a>
                <p className="mt-[15px] text-sm leading-[23px] text-secondaryLight">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
            </div>

            <div>
              <a href="#">
                <picture>
                  <img src="./logo.png" alt="OREBI" />
                </picture>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[65px]">
            <div>
              <ul className="flex items-center gap-x-[26px]">
                <li>
                  <a href="#" target="_blank">
                    <picture>
                      <img src="./facebook.svg" alt="facebook" />
                    </picture>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <picture>
                      <img src="./linkedin.svg" alt="linkedin" />
                    </picture>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <picture>
                      <img src="./instagram.svg" alt="instagram" />
                    </picture>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm leading-[23px] text-secondaryLight">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
