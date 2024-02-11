import React from "react";
import { CgSearch } from "react-icons/cg";
const SearchInput = ({ handleOnChange }) => {
  return (
    <div className="relative grow ">
      <form className="flex items-center h-12 relative">
        <input
          type="search"
          onChange={handleOnChange}
          placeholder="search"
          className="input input-bordered text-center rounded-r-none shadow-none w-full focus:outline-none"
        />
        <button
          type="submit"
          className="h-full bg-primary p-2 rounded-r-md px-4"
        >
          <CgSearch className="h-full text-3xl text-white font-bold" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
