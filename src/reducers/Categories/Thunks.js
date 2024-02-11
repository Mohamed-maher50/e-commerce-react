import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategories_thunk = createAsyncThunk(
  "categories/get",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/categories${query}`);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const createCategories_thunk = createAsyncThunk(
  "categories/post",
  async (query = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/categories${query}`);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
