import BookItem from "../BookItem/BookItem";
import authorsDataJSON from "../../assets/data/authorsData.json";

const HomeBestSellers = () => {
  const block = "home-best";
  const items = [];

  for (let index = 15; index < 20; index++) {
    let propsObj = {};
    propsObj["downloadLink"] =
      authorsDataJSON[index].volumeInfo.imageLinks.thumbnail;
    propsObj["authorName"] = authorsDataJSON[index].volumeInfo.authors[0];
    propsObj["bookName"] = authorsDataJSON[index].volumeInfo.title;
    propsObj["price"] = 9.99;
    propsObj["key"] = authorsDataJSON[index].id;
    propsObj["bookID"] = authorsDataJSON[index].id;
    items.push(<BookItem {...propsObj} />);
  }

  return <div className={`${block}__root`}>{items}</div>;
};

export default HomeBestSellers;
