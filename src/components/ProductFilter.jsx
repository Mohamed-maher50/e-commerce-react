import { CiGrid41, CiGrid2H } from "react-icons/ci";
import Select from "react-select";
const options = [
  { value: "price", label: "price" },
  { value: "position", label: "position" },
  { value: "quantity", label: "quantity" },
];

const ProductFilter = ({ setHorizontal }) => {
  return (
    <div className="flex justify-between p-3 col-span-full items-center w-full ">
      <div className="flex items-center gap-x-4">
        <label>Sort By</label>
        <Select
          className="w-40 capitalize"
          defaultValue={options[0]}
          options={options}
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
