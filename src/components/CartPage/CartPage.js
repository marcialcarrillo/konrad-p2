import ShoppingCartContext from "../../assets/data/ShoppingCartContext";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import authorsDataJSON from "../../assets/data/authorsData.json";
import { Link } from "react-router-dom";
import CartPageReminder from "../CartPageReminder/CartPageReminder";

const CartPage = () => {
  const covers = require.context("../../assets/images/covers", true);
  const block = "cart-page";
  const [cartContext, setCartContext] = useContext(ShoppingCartContext);

  const cartBooksWithIndexFromJSON = [];

  const handleQuantityChange = (event) => {
    let index = cartContext.findIndex(
      (item) => item.bookID === event.target.name
    );

    let newCartContext = [...cartContext];
    newCartContext[index].productQuantity = event.target.value;
    setCartContext(newCartContext);
  };

  const handleRemoveFromCart = (bookID) => {
    let indexToRemove = cartContext.findIndex((item) => item.bookID === bookID);
    let newCartContext = [...cartContext];
    newCartContext.splice(indexToRemove, 1);
    setCartContext(newCartContext);
  };

  cartContext.forEach((bookInCart) => {
    let indexInJSON = authorsDataJSON.findIndex(
      (bookInJSON) => bookInJSON.id === bookInCart.bookID
    );
    cartBooksWithIndexFromJSON.push({ indexInJSON, ...bookInCart });
  });

  let items = [];
  let priceAccumulator = 0;
  let itemCounter = 0;

  for (let index = 0; index < cartBooksWithIndexFromJSON.length; index++) {
    const cartItem = cartBooksWithIndexFromJSON[index];
    const _bookID = authorsDataJSON[cartItem.indexInJSON].id;
    let propsObj = {};
    propsObj["pathToBookCover"] = "../../assets/images/covers/cover.jpg";
    propsObj["authorName"] =
      authorsDataJSON[cartItem.indexInJSON].volumeInfo.authors[0];
    propsObj["bookName"] =
      authorsDataJSON[cartItem.indexInJSON].volumeInfo.title;
    propsObj["price"] = 9.99;
    propsObj["key"] = authorsDataJSON[cartItem.indexInJSON].id;
    propsObj["bookID"] = _bookID;
    propsObj["productQuantity"] = Number(cartItem.productQuantity);
    propsObj["imgSource"] = covers(`./${_bookID}-small.jfif`);
    propsObj["handleQuantityChange"] = handleQuantityChange;
    propsObj["handleRemoveFromCart"] = handleRemoveFromCart;
    items.push(<CartItem {...propsObj} />);
    priceAccumulator += propsObj["price"] * Number(propsObj["productQuantity"]);
    itemCounter += Number(propsObj["productQuantity"]);
  }

  return (
    <main className={`${block}__root`}>
      <h1 className={`${block}__title`}> Your basket</h1>
      {cartContext.length ? (
        <div className={`${block}__summary`}>
          <p className={`${block}__message`}>
            you have {itemCounter} {itemCounter > 1 ? "items" : "item"} in your
            cart for a total of{" "}
            <strong>US${priceAccumulator.toFixed(2)}</strong>
          </p>
          <Link to={"/checkout-page"} className={`${block}__button`}>
            Checkout
          </Link>
        </div>
      ) : (
        <p className={`${block}__summary--empty`}>Your cart is empty</p>
      )}

      {cartContext.length ? (
        <div className={`${block}__items`}>
          <h2 className={`${block}__title--h2`}>Shopping Cart Details</h2>{" "}
          {items}
        </div>
      ) : (
        <CartPageReminder />
      )}
    </main>
  );
};

export default CartPage;
