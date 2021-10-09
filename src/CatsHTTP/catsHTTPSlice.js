import { createSlice } from "@reduxjs/toolkit";

export const defaultData = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NQzj2JqAe6Gtd65a7iTvm0-wKb2NlluwKA&usqp=CAU";

export const catsHTTPSlice = createSlice({
  name: "catsHTTP",
  initialState: {
    loading: false,
    error: false,
    data: defaultData,
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
