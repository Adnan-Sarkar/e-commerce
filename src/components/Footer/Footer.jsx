const Footer = () => {
  return (
    <>
      <footer className="font-dm-sans bg-grayLight">
        <div className="max-w-container">
          <div className="flex">
            <div className="flex items-start gap-x-[143px]">
              <div>
                <h4>MENU</h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Journal</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4>SHOP</h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a href="#">Category 1</a>
                  </li>
                  <li>
                    <a href="#">Category 2</a>
                  </li>
                  <li>
                    <a href="#">Category 3</a>
                  </li>
                  <li>
                    <a href="#">Category 4</a>
                  </li>
                  <li>
                    <a href="#">Category 5</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4>HELP</h4>
                <ul className="flex flex-col gap-y-[6px]">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Special E-shop</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Secure Payments</a>
                  </li>
                </ul>
              </div>

              <div>
                <a href="#">(052) 611-5711</a>
                <a href="#">company@domain.com</a>
                <p>575 Crescent Ave. Quakertown, PA 18951</p>
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

          <div className="flex items-center justify-between">
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
              <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
