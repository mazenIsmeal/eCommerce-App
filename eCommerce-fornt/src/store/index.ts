import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Categories from './categories/categoriesSlice'
import Product from './product/productSlice'
import cart from './cart/cartSlice'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['cart']
}

const rootReducer = combineReducers(
  {Categories, Product, cart}
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persist = persistStore(store);
export {store, persist};