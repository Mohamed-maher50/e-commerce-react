import React from "react";

const ProductCard = () => {
  return (
    <div class="card rounded-lg hover:shadow-lg shadow-md bg-white">
      <div class="card-body p-6 flex flex-col items-center space-y-6">
        <div class="flex justify-between items-center w-full">
          <span class="badge badge-primary">#123456</span>{" "}
          <button class="btn btn-sm btn-error">Delete</button>{" "}
        </div>
        <div class="flex justify-between items-center space-x-4">
          <img
            src={
              "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/w/t/wt996-1-min_1.jpg"
            }
            alt="Image"
            class="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 class="font-bold text-xl">Title</h2>
            <p class="text-gray-500">Category Badge | Brand Badge</p>
            <span class="text-lg font-bold text-green-500">Amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
