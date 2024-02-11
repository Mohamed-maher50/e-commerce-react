import { createAsyncThunk } from "@reduxjs/toolkit";

export const removeToWishList_Async = createAsyncThunk(
  "subcategories/get",
  async (_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/subcategories`);
      return fulfillWithValue(_id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
