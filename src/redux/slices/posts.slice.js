import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {
    setPosts: (state, action) => {
      console.log('action.payload', action.payload)
      state.list = action.payload
    }
  }
})

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;