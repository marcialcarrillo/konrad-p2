import { useContext, useState } from "react";

import ShoppingCartContext from "../../assets/data/ShoppingCartContext";
import authorsDataJSON from "../../assets/data/authorsData.json";
import CheckoutSummaryItem from "../CheckoutSummaryItem/CheckoutSummaryItem";

const CheckoutSummary = () => {
  const [cartContext] = useContext(ShoppingCartContext);
  const [staticCartContext] = useState(cartContext);

  const block = "checkout-summary";

  const cartBooksWithIndexFromJSON = [];
  let indexInJSON;
  staticCartContext.forEach((bookInCart) => {
    indexInJSON = authorsDataJSON.findIndex(
      (bookInJSON) => bookInJSON.id === bookInCart.bookID
    );
    cartBooksWithIndexFromJSON.push({ indexInJSON, ...bookInCart });
  });

  let items = [];
  let isEbook;
  try {
    isEbook = authorsDataJSON[indexInJSON].saleInfo.isEbook;
  } catch (e) {
    isEbook = true;
  }

  let priceAccumulator = 0;
  let itemCounter = 0;

  for (let index = 0; index < cartBooksWithIndexFromJSON.length; index++) {
    const cartItem = cartBooksWithIndexFromJSON[index];
    let propsObj = {};
    propsObj["coverType"] = isEbook ? "ebook" : "Hardback";
    propsObj["bookName"] =
      authorsDataJSON[cartItem.indexInJSON].volumeInfo.title;
    propsObj["price"] = 9.99;
    propsObj["key"] = authorsDataJSON[cartItem.indexInJSON].id;
    propsObj["bookID"] = authorsDataJSON[cartItem.indexInJSON].id;
    propsObj["productQuantity"] = cartItem.productQuantity;
    items.push(<CheckoutSummaryItem {...propsObj} />);
    priceAccumulator += propsObj["price"] * Number(propsObj["productQuantity"]);
    itemCounter += Number(propsObj["productQuantity"]);
  }

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__header`}>
        <div className={`${block}__wrapper--title`}>
          <h2 className={`${block}__title--h2`}>Order Summary</h2>
          <div>
            <span className={`${block}__items-ammount`}>
              {itemCounter} {itemCounter > 1 ? "items" : "item"}
            </span>
          </div>
        </div>
        <p className={`${block}__total-price`}>US${Number(priceAccumulator)}</p>
      </div>
      <div className={`${block}__body`}>
        {items}
        <div className={`${block}__wrapper--sub`}>
          <p>
            <strong>Sub-Total</strong>
          </p>
          <p>US${Number(priceAccumulator)}</p>
        </div>
        <div className={`${block}__wrapper--sub`}>
          <p>
            <strong>Delivery</strong>
          </p>
          <p>
            <strong>FREE</strong>
          </p>
        </div>
        <div className={`${block}__wrapper--sub`}>
          <p>
            <strong>VAT</strong>
          </p>
          <p>US$0.00</p>
        </div>
        <div className={`${block}__wrapper--sub`}>
          <p>
            <strong>Total</strong>
          </p>
          <p className={`${block}__price--final`}>
            US${Number(priceAccumulator)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
