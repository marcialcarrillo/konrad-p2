import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import ProcessPaymentSuccess from "../ProcessPaymentSuccess/ProcessPaymentSuccess";

const ProcessPayment = () => {
  const block = "process-payment";

  return (
    <main className={`${block}__root`}>
      <CheckoutSummary />
      <ProcessPaymentSuccess />
    </main>
  );
};

export default ProcessPayment;
