import PropTypes from "prop-types";

const ProductPaginationItem = ({ isSelected, _page, setPage }) => {
  const block = "pagination-item";

  return (
    <button
      className={`${block}__root  ${isSelected}`}
      onClick={() => {
        setPage(_page);
      }}
    >
      {_page + 1}
    </button>
  );
};

ProductPaginationItem.propTypes = {
  isSelected: PropTypes.string,
  _page: PropTypes.number,
  setPage: PropTypes.func,
};

export default ProductPaginationItem;
