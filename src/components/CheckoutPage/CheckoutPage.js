import CheckoutDeliveryInfo from "../CheckoutDeliveryInfo/CheckoutDeliveryInfo";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

const CheckoutPage = () => {
  const block = "checkout-page";

  return (
    <main className={`${block}__root`}>
      <CheckoutSummary />
      <CheckoutDeliveryInfo />
    </main>
  );
};

export default CheckoutPage;
