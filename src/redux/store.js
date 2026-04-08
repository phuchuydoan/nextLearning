import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './slices/posts.slice'

export const makeStore = () => {

  return configureStore({
    reducer: {
      posts: postsReducer,
    }
  })
}
