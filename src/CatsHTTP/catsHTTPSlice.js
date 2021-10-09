import { createSlice } from "@reduxjs/toolkit";

export const defaultData = "images/catWaiting.jpg";
const progressData = "images/status102.jpg";

export const catsHTTPSlice = createSlice({
  name: "catsHTTP",
  initialState: {
    loading: false,
    error: false,
    data: defaultData,
    progressData: progressData,
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

// Action creators are generated for each case reducer function
export const { setLoading, setError, setData } = catsHTTPSlice.actions;

export default catsHTTPSlice.reducer;
