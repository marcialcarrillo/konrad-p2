import { useEffect, useState } from "react";
import HeaderMenuHamburger from "../HeaderMenuHamburger/HeaderMenuHamburger";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const block = "menu";
  let [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    !isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  }, [isOpen]);

  return (
    <div className={`${block}__wrapper`}>
      <HeaderMenuHamburger isOpen={isOpen} toggleHamburger={toggleHamburger} />
      <ul className={isOpen ? `${block}__root--open` : `${block}__root`}>
        <Link
          to="/"
          onClick={() => toggleHamburger()}
          className={`${block}__item`}
        >
          Home
        </Link>
        <Link
          to="/product-list"
          onClick={() => toggleHamburger()}
          className={`${block}__item`}
        >
          Product List
        </Link>
        <Link
          to="/cart-page"
          onClick={() => toggleHamburger()}
          className={`${block}__item`}
        >
          Cart
        </Link>
      </ul>
    </div>
  );
};

export default HeaderMenu;
