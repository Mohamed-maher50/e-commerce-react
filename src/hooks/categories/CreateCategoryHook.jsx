import { useState } from "react";
import { useRef } from "react";
const useCreateCategoryHook = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const url = selectedImage && URL.createObjectURL(selectedImage);
  const categoryName = useRef(null);
  const handleCategoryOnChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", categoryName.current?.value);
    dispatch(createBrand_thunk(formData));
  };
  return [url, handleSubmit, categoryName, handleCategoryOnChange];
};

export default useCreateCategoryHook;
