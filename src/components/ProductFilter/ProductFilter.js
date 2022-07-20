import PropTypes from "prop-types";

const ProductFilter = ({ setCategoryFilter }) => {
  const block = "product-filter";

  return (
    <div className={`${block}__root`}>
      <p className={`${block}__title`}>
        <strong>Filter by Author</strong>
      </p>
      <button
        className={`${block}__item`}
        onClick={() => {
          setCategoryFilter("Isaac Asimov");
        }}
      >
        Isaac Asimov
      </button>
      <button
        className={`${block}__item`}
        onClick={() => {
          setCategoryFilter("Arthur C. Clarke");
        }}
      >
        Arthur C. Clarke
      </button>
      <button
        className={`${block}__item`}
        onClick={() => {
          setCategoryFilter("Robert A. Heinlein");
        }}
      >
        Robert A. Heinlein
      </button>
      <button
        className={`${block}__item`}
        onClick={() => {
          setCategoryFilter(null);
        }}
      >
        Clear Filter
      </button>
    </div>
  );
};

ProductFilter.propTypes = {
  setCategoryFilter: PropTypes.func,
};

export default ProductFilter;
