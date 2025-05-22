import { configureStore } from '@reduxjs/toolkit'
import Categories from './categories/categoriesSlice'
import Product from './product/productSlice'

export const store = configureStore({
  reducer: {Categories, Product},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store