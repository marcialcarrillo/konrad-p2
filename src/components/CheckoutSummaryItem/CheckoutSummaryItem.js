import PropTypes from "prop-types";

const CheckoutSummaryItem = ({
  bookName,
  productQuantity,
  coverType,
  price,
}) => {
  const block = "checkout-summ-item";

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__wrapper`}>
        <p className={`${block}__info`}>
          {bookName} ({coverType})
        </p>
        <p>x{productQuantity}</p>
      </div>
      <p className={`${block}__price`}>
        US${(Number(price) * Number(productQuantity)).toFixed(2)}
      </p>
    </div>
  );
};

CheckoutSummaryItem.propTypes = {
  bookName: PropTypes.string,
  productQuantity: PropTypes.number,
  coverType: PropTypes.string,
  price: PropTypes.number,
};

export default CheckoutSummaryItem;
