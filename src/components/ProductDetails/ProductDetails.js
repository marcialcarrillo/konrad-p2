import { useParams } from "react-router-dom";
import DetailsData from "../DetailsData/DetailsData";
import DetailsTools from "../DetailsTools/DetailsTools";
import authorsDataJSON from "../../assets/data/authorsData.json";
import DetailsCheckout from "../DetailsCheckout/DetailsCheckout";

const ProductDetails = () => {
  let { bookID } = useParams();
  const covers = require.context("../../assets/images/covers", true);
  const block = "product-details";
  const pathToLocalBook = `./${bookID}-small.jfif`;

  let indexInJSON = authorsDataJSON.findIndex(
    (bookInJSON) => bookInJSON.id === bookID
  );
  const title = authorsDataJSON[indexInJSON].volumeInfo.title;

  return (
    <main className={`${block}__container`}>
      <div className={`${block}__root`}>
        <h1 className={`${block}__title`}>{title}</h1>
        <div className={`${block}__main-wrapper`}>
          <DetailsData bookID={bookID} size="mobile" />
          <div className={`${block}__image-container`}>
            <img
              className={`${block}__image`}
              alt={title}
              src={covers(pathToLocalBook)}
            />
          </div>
          <div className={`${block}__info-wrapper`}>
            <DetailsData bookID={bookID} size="computer" />
            <div className={`${block}__price`}>US$9.99</div>
            <DetailsCheckout bookID={bookID} />
            <DetailsTools bookID={bookID} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
