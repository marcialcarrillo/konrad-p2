import BookItem from "../BookItem/BookItem";
import PropTypes from "prop-types";

const BooksContainer = ({ initialIndex, finalIndex, filteredAuthorsData }) => {
  const block = "books-container";
  const items = [];

  for (let index = initialIndex; index < finalIndex; index++) {
    let propsObj = {};
    propsObj["downloadLink"] =
      filteredAuthorsData[index].volumeInfo.imageLinks.thumbnail;
    propsObj["authorName"] = filteredAuthorsData[index].volumeInfo.authors[0];
    propsObj["bookName"] = filteredAuthorsData[index].volumeInfo.title;
    propsObj["price"] = 9.99;
    propsObj["key"] = filteredAuthorsData[index].id;
    propsObj["bookID"] = filteredAuthorsData[index].id;
    items.push(<BookItem {...propsObj} />);
  }

  return <div className={`${block}__root`}>{items}</div>;
};

BooksContainer.propTypes = {
  initialIndex: PropTypes.number,
  finalIndex: PropTypes.number,
  filteredAuthorsData: PropTypes.array,
};

export default BooksContainer;
