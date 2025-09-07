import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Categories from './categories/categoriesSlice'
import Product from './product/productSlice'
import cart from './cart/cartSlice'
import wishlist from './wishlist/wishlistSlice'
import authSlice from './auth/authSlice'

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['item']
}

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  whitelist: ['itemsId']
}

const rootReducer = combineReducers(
  {
    authSlice,
    Categories, 
    Product, 
    cart: persistReducer(cartPersistConfig, cart),
    wishlist: persistReducer(wishlistPersistConfig, wishlist)
  }
)

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persist = persistStore(store);
export {store, persist};