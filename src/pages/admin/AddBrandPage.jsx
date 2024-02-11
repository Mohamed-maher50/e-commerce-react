import React from "react";
import { FileInput, FormInput } from "../../components/utility/Inputs";
import useCreate_brand_hook from "../../hooks/brands/Create_brand_hook";
const AddBrandPage = () => {
  const [handleBrandOnChange, submitForm, brandName, url] =
    useCreate_brand_hook();
  return (
    <section className="">
      <div className="container mx-auto">
        <form onSubmit={submitForm} className="flex flex-col gap-4">
          <div className="">
            <div className="w-40 h-40">
              {url ? (
                <img src={url} alt="brand image" />
              ) : (
                <FileInput onchangeHandler={handleBrandOnChange} />
              )}
            </div>
          </div>

          <FormInput
            label="Brand name"
            status={false}
            placeholder="Enter Brand Name "
            ref={brandName}
          />
          <button type="submit" className="btn btn-primary text-white text-lg">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBrandPage;
