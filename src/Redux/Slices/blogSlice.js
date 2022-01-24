import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk to get data using api here
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  const response = await fetch("/blogs.JSON").then((res) => res.json());
  return response;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    status: "idle",
  },

  //   main reducers here
  reducers: {},
  //   extra reducers for api and other fatching operations
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default blogSlice.reducer;
