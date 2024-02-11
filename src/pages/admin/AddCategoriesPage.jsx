import React from "react";
import { FileInput, FormInput } from "../../components/utility/Inputs";

import useCreateCategoryHook from "../../hooks/categories/CreateCategoryHook";

const AddCategoriesPage = () => {
  const [url, handleSubmit, categoryName, handleCategoryOnChange] =
    useCreateCategoryHook();
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div className="w-40 h-40">
          {url ? (
            <img src={url} alt="brand image" />
          ) : (
            <FileInput onchangeHandler={handleCategoryOnChange} />
          )}
        </div>
      </div>

      <FormInput
        status={false}
        label="category name"
        ref={categoryName}
        placeholder="enter category name"
      />
      <button type="submit" className="btn btn-primary text-white text-lg">
        submit
      </button>
    </form>
  );
};

export default AddCategoriesPage;
