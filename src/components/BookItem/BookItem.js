import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookItem = ({ authorName, bookName, price, bookID }) => {
  const block = "book-item";
  const covers = require.context("../../assets/images/covers", true);

  const truncateAmount = 27;

  const truncate = (string) => {
    return string.length > truncateAmount
      ? string.substring(0, truncateAmount) + "..."
      : string;
  };

  const pathToLocalBook = `./${bookID}-small.jfif`;
  const bookCover = covers(pathToLocalBook);

  return (
    <div className={`${block}__container`}>
      <div className={`${block}__root`}>
        <div className={`${block}__image-container`}>
          <img className={`${block}__image`} src={bookCover} alt={bookName} />
        </div>
        <div className={`${block}__book-name-wrap`}>
          <Link
            to={`/product-details/${bookID}`}
            className={`${block}__book-name`}
            title={bookName}
          >
            {truncate(bookName)}{" "}
          </Link>
          {/* <p className={`${block}__book-name`}>{bookName}</p> */}
        </div>
        <p className={`${block}__author-name`}>{authorName}</p>
        <p className={`${block}__price`}>${price}</p>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  authorName: PropTypes.string,
  bookName: PropTypes.string,
  price: PropTypes.number,
  bookID: PropTypes.string,
};

export default BookItem;
