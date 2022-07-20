import PropTypes from "prop-types";

const CartItem = ({
  authorName,
  bookName,
  price,
  bookID,
  productQuantity,
  handleQuantityChange,
  handleRemoveFromCart,
  imgSource,
}) => {
  const block = "cart-item";

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__wrapper--img-info`}>
        <img src={imgSource} className={`${block}__image`} alt={bookName} />
        <div className={`${block}__wrapper--info`}>
          <p className={`${block}__title`}>{bookName}</p>
          <p className={`${block}__author`}>{authorName}</p>

          <p className={`${block}__price`}>US${price}</p>
        </div>
      </div>
      <div className={`${block}__wrapper--qt-pr`}>
        <form className={`${block}__quantity`}>
          <label className={`${block}__quantity-label`}>Quantity</label>
          <input
            className={`${block}__quantity-input`}
            value={productQuantity}
            name={bookID}
            type="number"
            onChange={(e) => {
              handleQuantityChange(e);
            }}
          ></input>
        </form>
        <div className={`${block}__wrapper--price-remove`}>
          <p className={`${block}__total-price`}>
            US${(price * productQuantity).toFixed(2)}
          </p>
          <button
            className={`${block}__remove-button`}
            onClick={(e) => {
              handleRemoveFromCart(bookID);
            }}
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  authorName: PropTypes.string,
  bookName: PropTypes.string,
  price: PropTypes.number,
  bookID: PropTypes.string,
  productQuantity: PropTypes.number,
  handleQuantityChange: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  imgSource: PropTypes.string,
};

export default CartItem;
