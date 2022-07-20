import { Link } from "react-router-dom";

const CartPageReminder = () => {
  const block = "cart-reminder";
  return (
    <div className={`${block}__root`}>
      <h2 className={`${block}__sub-title`}>Not sure which book to buy?</h2>
      <p className={`${block}__rem-message`}>
        Remember that all the books on our catalog come from the reputed and
        highly acclaimed big 3 of science fiction, even books you have never
        heard about could quickly become your favorites!
      </p>
      <Link to={"/product-list"} className={`${block}__button`}>
        {" "}
        Find Some Books!
      </Link>
    </div>
  );
};

export default CartPageReminder;
