import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import ShoppingCartContext from "../../assets/data/ShoppingCartContext";
import loading from "../../assets/icons/loading.gif";
import thankyou from "../../assets/icons/thankyou.svg";

const ProcessPaymentSuccess = () => {
  const block = "process-success";
  let [isLoading, setIsLoading] = useState(true);
  const [, setCartContext] = useContext(ShoppingCartContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCartContext([]);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [setCartContext]);

  return (
    <div className={`${block}__root`}>
      {isLoading ? (
        <div className={`${block}__loading-wrapper`}>
          <p className={`${block}__loading-msg`}>
            Processing payment, sit tight!
          </p>
          <img className={`${block}__spinner`} src={loading} alt="loading" />
        </div>
      ) : (
        <div className={`${block}__msg-wrapper`}>
          <p className={`${block}__success-msg`}>
            Thank you for your purchase!
          </p>
          <img className={`${block}__thankyou`} src={thankyou} alt="thank you" />
        </div>
      )}
      {!isLoading && (
        <Link to="/product-list" className={`${block}__button`}>
          Browse more books
        </Link>
      )}
    </div>
  );
};

export default ProcessPaymentSuccess;
