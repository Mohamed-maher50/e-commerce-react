import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("api/v1/auth/login", data);
      return res?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const signUp_Async = createAsyncThunk(
  "auth/signUp",
  async (formValues, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/auth/signup", {
        ...formValues,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const forgotPasswords = createAsyncThunk(
  "auth/restPassword",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await axios.post("/api/v1/auth/forgotPasswords", values);
      return fulfillWithValue(values);
    } catch (error) {
      return rejectWithValue("can't not rest password");
    }
  }
);
export const verifyRestPasswordCode_API = createAsyncThunk(
  "auth/restPasswordCode",
  async (restCode, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth/verifyResetCode",
        restCode
      );
      data;
      return data;
    } catch (error) {
      return rejectWithValue("rest code not correct or expire!");
    }
  }
);
export const updateUserAddress = createAsyncThunk(
  "user/updateAddress",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.put("/api/v1/users", values);
      data;
      return data?.data;
    } catch (error) {
      error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const getUserInformation = createAsyncThunk(
  "user/getInformation",
  async () => {
    try {
      const { data } = await axios.get("/api/v1/users");
    } catch (error) {
      error;
    }
  }
);
