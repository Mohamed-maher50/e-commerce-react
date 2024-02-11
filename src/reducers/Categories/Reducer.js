import { createSlice } from "@reduxjs/toolkit";
import { getCategories_thunk } from "./Thunks";

const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    loading: true,
    categories: {},
    errors: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories_thunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories_thunk.fulfilled, (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    });
    builder.addCase(getCategories_thunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default CategorySlice.reducer;
