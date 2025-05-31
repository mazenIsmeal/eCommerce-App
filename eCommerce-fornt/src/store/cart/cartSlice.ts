import { createSlice, createSelector } from "@reduxjs/toolkit";
import type {TProduct} from '@customType/product'
import type { RootState } from "../index";
import actGetProductsItem from "./act/actGetProductsItem";
import type { TLoading } from "@customType/shared";

interface ICartStore {
    item: {[key: string]: number},
    productsInfo: TProduct[],
    loading: TLoading,
    error: null | string
}

const initialState: ICartStore = {
    item: {},
    productsInfo: [],
    loading: 'idle',
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            if (state.item[id]) {
                state.item[id]++
            }else {
                state.item[id] = 1
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsItem.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProductsItem.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.productsInfo = action.payload
        })
        builder.addCase(actGetProductsItem.rejected, (state, action) => {
            state.loading = 'failed'
            if(action.payload && typeof action.payload ==='string') {
                state.error = action.payload
            }
        })
    }
})

const getCartTotalQuantity = createSelector((state: RootState) => state.cart.item, (item) => {
    const totalQuantity = Object.values(item).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return totalQuantity
})


export {getCartTotalQuantity, actGetProductsItem} 
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;