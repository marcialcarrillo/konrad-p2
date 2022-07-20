import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutDeliveryInfo = () => {
  const block = "checkout-delivery";
  const [formValues, setFormValues] = useState({
    fullName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    pla: "",
    plae: "",
    plac: "",
  });

  function SubmitButton() {
    if (
      formValues.fullName &&
      formValues.line1 &&
      formValues.line2 &&
      formValues.city &&
      formValues.state &&
      formValues.zip &&
      formValues.pla &&
      formValues.plae &&
      formValues.plac
    ) {
      return (
        <Link to="/process-payment" className={`${block}__button`}>
          Make Purchase
        </Link>
      );
    } else {
      return (

        <button disabled className={`${block}__button`}>
          Fill out your information
        </button>
      );
    }
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setFormValues({
      ...formValues,
      [evt.target.name]: value,
    });
  }

  return (
    <div className={`${block}__root`}>
      <h2 className={`${block}__title--h2`}>1. Delivery Address</h2>
      <form className={`${block}__form--delivery`}>
        <label className={`${block}__label`}>Full name</label>
        <input
          onChange={(e) => handleChange(e)}
          name="fullName"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
        <label className={`${block}__label`}>Address line 1</label>
        <input
          onChange={(e) => handleChange(e)}
          name="line1"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
        <label className={`${block}__label`}>Address line 2</label>
        <input
          onChange={(e) => handleChange(e)}
          name="line2"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
        <label className={`${block}__label`}>Town/City</label>
        <input
          onChange={(e) => handleChange(e)}
          name="city"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
        <label className={`${block}__label`}>Country/State</label>
        <input
          onChange={(e) => handleChange(e)}
          name="state"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
        <label className={`${block}__label`}>Postcode/ZIP</label>
        <input
          onChange={(e) => handleChange(e)}
          name="zip"
          className={`${block}__input`}
        ></input>
        <p className={`${block}__helper-text`}></p>
      </form>
      <h2 className={`${block}__title--h2`}>2.Payment</h2>
      <form className={`${block}__form--card`}>
        <input
          onChange={(e) => handleChange(e)}
          className={`${block}__input--card`}
          placeholder="Card Number"
          name="pla"
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="plae"
          className={`${block}__input--exp`}
          placeholder="MM/YYYY"
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="plac"
          className={`${block}__input--cvv`}
          placeholder="CVV"
        ></input>
      </form>
      <div className={`${block}__button-wrapper`}>
        <SubmitButton />
      </div>
    </div>
  );
};

export default CheckoutDeliveryInfo;
