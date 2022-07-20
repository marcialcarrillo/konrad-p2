import ProductPaginationItem from "../ProductPaginationItem/ProductPaginationItem";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const ProductPagination = ({ maxPages, page, setPage }) => {
  const block = "pagination";

  let items = [];

  //create a 5 item array, centered on the selected page, if possible
  const lastPage = Math.min(Math.max(page + 2, 4), maxPages);
  const initialPage = Math.max(lastPage - 4, 0);

  //make the array
  for (let i = initialPage; i <= lastPage; i++) {
    let isSelected;
    page === i ? (isSelected = "selected") : (isSelected = "");
    let propsObj = {};
    propsObj["isSelected"] = isSelected;
    propsObj["_page"] = i;
    propsObj["setPage"] = setPage;
    propsObj["key"] = uuidv4();
    items.push(<ProductPaginationItem {...propsObj} />);
  }

  return <div className={`${block}__root`}>{items}</div>;
};

ProductPagination.propTypes = {
  maxPages: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default ProductPagination;
