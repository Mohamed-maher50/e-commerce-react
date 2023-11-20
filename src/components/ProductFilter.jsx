import { CiGrid41, CiGrid2H } from "react-icons/ci";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// eslint-disable-next-line react/prop-types
const ProductFilter = ({ setHorizontal }) => {
  return (
    <div className=" col-span-full p-2 flex justify-between">
      <div className="flex items-center gap-x-3">
        <label>Sort By</label>
        <Select
          options={options}
          className={{
            control: (base) => ({
              ...base,
              border: 0,
              // This line disable the blue border
              boxShadow: "none",
            }),
          }}
        />
      </div>
      <div className="flex font-extrabold text-3xl">
        <CiGrid41 onClick={() => setHorizontal(false)} />
        <CiGrid2H onClick={() => setHorizontal(true)} />
      </div>
    </div>
  );
};

export default ProductFilter;
