import { createSlice } from "@reduxjs/toolkit";

export const defaultData = "images/catWaiting.jpg";
const progressData = "images/status102.jpg";
const errorImage = "images/requestError.jpg";

export const catsHTTPSlice = createSlice({
  name: "catsHTTP",
  initialState: {
    loading: false,
    error: false,
    data: defaultData,
    progressData: progressData,
    errorImage: errorImage
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = catsHTTPSlice.actions;

export default catsHTTPSlice.reducer;
