import ShoppingCartContext from "../../assets/data/ShoppingCartContext";
import { useContext, useState } from "react";
import PropTypes from "prop-types";

const DetailsCheckout = ({ bookID }) => {
  const block = "details-checkout";
  const [cartContext, setCartContext] = useContext(ShoppingCartContext);
  let copyOfContext = [];
  let [productQuantityToAdd, setProductQuantityToAdd] = useState(1);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setProductQuantityToAdd(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (setCartContext)
      if (cartContext) {
        let previousCartItemIndex = cartContext.findIndex(
          (item) => item.bookID === bookID
        );
        if (previousCartItemIndex >= 0) {
          updateItem(previousCartItemIndex);
        } else {
          pushNewItem();
        }
      }
  };

  const updateItem = (previousCartItemIndex) => {
    //to avoid mutating the state
    copyOfContext = [...cartContext];
    copyOfContext.splice(previousCartItemIndex, 1);

    setCartContext((previousState) => [
      ...copyOfContext,
      {
        bookID: bookID,
        productQuantity:
          Number(previousState[previousCartItemIndex].productQuantity) +
          Number(productQuantityToAdd),
      },
    ]);
  };

  const pushNewItem = () => {
    setCartContext([
      ...cartContext,
      {
        bookID: bookID,
        productQuantity: productQuantityToAdd,
      },
    ]);
  };

  return (
    <div className={`${block}__root`}>
      <form className={`${block}__form`}>
        <button
          className={`${block}__button`}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Add To Cart
        </button>
        <input
          className={`${block}__input`}
          type="number"
          onChange={(e) => {
            handleQuantityChange(e);
          }}
          value={productQuantityToAdd}
        ></input>
      </form>
    </div>
  );
};

DetailsCheckout.propTypes = {
  bookID: PropTypes.string,
};

export default DetailsCheckout;
