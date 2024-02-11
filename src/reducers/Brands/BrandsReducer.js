import { createSlice } from "@reduxjs/toolkit";
import { getBrands_thunk } from "./BrandsThunks";
const BrandsSlice = createSlice({
  name: "categories",
  initialState: {
    loading: true,
    brands: {},
    errors: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getBrands_thunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBrands_thunk.fulfilled, (state, { payload }) => {
      state.brands = payload;
      state.loading = false;
    });
    builder.addCase(getBrands_thunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default BrandsSlice.reducer;
