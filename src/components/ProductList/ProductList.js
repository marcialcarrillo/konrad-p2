import { useState } from "react";
import BooksContainer from "../BooksContainer/BooksContainer";
import ProductFilter from "../ProductFilter/ProductFilter";
import authorsDataJSON from "../../assets/data/authorsData.json";
import ProductPagination from "../ProductPagination/ProductPagination";

const About = () => {
  const block = "product-list";
  let [categoryFilter, setCategoryFilter] = useState(null);
  let [page, setPage] = useState(0);

  let filteredAuthorsData = [];

  if (categoryFilter) {
    filteredAuthorsData = authorsDataJSON.filter(
      (item) => categoryFilter === item.volumeInfo.authors[0]
    );
  } else {
    filteredAuthorsData = authorsDataJSON;
  }

  const interval = 10;
  let maxPages = Math.floor(filteredAuthorsData.length / interval);
  let initialIndex = Math.min(page * interval, maxPages * interval);
  let finalIndex = Math.min((page + 1) * interval, filteredAuthorsData.length);

  return (
    <main className={`${block}__root`}>
      <ProductFilter
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <div className={`${block}__catalog-wrapper`}>
        <h2>Our Book Catalog</h2>
        <ProductPagination maxPages={maxPages} page={page} setPage={setPage} />
        <BooksContainer
          categoryFilter={categoryFilter}
          initialIndex={initialIndex}
          finalIndex={finalIndex}
          filteredAuthorsData={filteredAuthorsData}
        />
      </div>
    </main>
  );
};

export default About;
