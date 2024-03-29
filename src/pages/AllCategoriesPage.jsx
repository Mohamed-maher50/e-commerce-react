import ReactPaginate from "react-paginate";
import useAllCategoriesHook from "../hooks/categories/AllCategoriesHook";

const AllCategoriesPage = () => {
  let [categories, loading, paginationHandler] = useAllCategoriesHook();

  return (
    <section>
      <div className="container mx-auto grid gap-5 ">
        <div className="grid grid-cols-3 md:grid-cols-4  gap-2">
          {categories?.data?.map((category, index) => {
            return (
              <div key={index}>
                <img src={category.image} alt={category.name} />
              </div>
            );
          })}
        </div>
        {categories &&
          categories.paginationResult &&
          categories.paginationResult.numberOfPages > 1 && (
            <ReactPaginate
              pageCount={categories.paginationResult.numberOfPages}
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              onPageChange={({ selected }) => paginationHandler(selected)}
              breakClassName="break-me"
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              containerClassName="pagination"
              subContainerClassName="pages pagination"
              activeClassName="active"
            />
          )}
      </div>
    </section>
  );
};

export default AllCategoriesPage;
