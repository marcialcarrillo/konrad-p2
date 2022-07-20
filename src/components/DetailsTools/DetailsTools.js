const DetailsTools = () => {
  const block = "details-tools";
  const icons = require.context("../../assets/icons", true);

  return (
    <div className={`${block}__root`}>
      <div className={`${block}__wrapper`}>
        <img
          className={`${block}__icon`}
          src={icons("./delivery.svg")}
          alt="delivery truck"
        />
        <div>Free delivery worldwide</div>
      </div>
      <div className={`${block}__wrapper`}>
        <img
          className={`${block}__icon`}
          src={icons("./available.svg")}
          alt="check mark"
        />
        <div>Available. Ships from the US in 3 business days</div>
      </div>
    </div>
  );
};

export default DetailsTools;
