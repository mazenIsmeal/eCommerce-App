import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import actGetProductsItem from "./act/actGetProductsItem";
import { isString,  type TLoading,  type TProduct } from "@types";

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
        },
        handlerChangeQuantity: (state, action) => {
            state.item[action.payload.id] = action.payload.quantity
        },
        itemRemove: (state, action) => {
            delete state.item[action.payload]
            state.productsInfo = state.productsInfo.filter((el) => el.id !== action.payload)
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
            if(isString(action.payload)) {
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
export const {addToCart, handlerChangeQuantity, itemRemove} = cartSlice.actions
export default cartSlice.reducer;