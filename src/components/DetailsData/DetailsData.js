import authorsDataJSON from "../../assets/data/authorsData.json";
import PropTypes from "prop-types";

const DetailsData = ({ bookID, size }) => {
  const block = "details-data";
  let indexInJSON = authorsDataJSON.findIndex(
    (bookInJSON) => bookInJSON.id === bookID
  );

  const author = authorsDataJSON[indexInJSON].volumeInfo.authors[0];
  let ratingAverage = authorsDataJSON[indexInJSON].volumeInfo.averageRating;
  let ratingVotes = authorsDataJSON[indexInJSON].volumeInfo.ratingsCount;
  let isEbook = authorsDataJSON[indexInJSON].saleInfo.isEbook;

  try {
    ratingAverage = authorsDataJSON[indexInJSON].volumeInfo.averageRating;
  } catch (e) {
    ratingAverage = 4.2;
  }
  try {
    ratingVotes = authorsDataJSON[indexInJSON].volumeInfo.ratingsCount;
  } catch (e) {
    ratingVotes = 4;
  }
  try {
    isEbook = authorsDataJSON[indexInJSON].saleInfo.isEbook;
  } catch (e) {
    isEbook = true;
  }

  return (
    <div className={`${block}__root ${size}`}>
      <p>
        Rating: {ratingAverage ? ratingAverage : 4.2} (
        {ratingVotes ? ratingVotes : 4} user ratings)
      </p>
      <p> {isEbook ? "ebook" : "Hardback"} - English </p>
      <p>by (author) {author}</p>
    </div>
  );
};

DetailsData.propTypes = {
  bookID: PropTypes.string,
  size: PropTypes.string,
};

export default DetailsData;
