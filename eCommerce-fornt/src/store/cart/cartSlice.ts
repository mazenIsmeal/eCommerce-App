import { createSlice, createSelector } from "@reduxjs/toolkit";
import type {TProduct} from '@customType/product'
import type { RootState } from "../index";

interface ICartStore {
    item: {[key: number]: number},
    productInfo: TProduct[]
}

const initialState: ICartStore = {
    item: {},
    productInfo: []
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
    }
})

const getCartTotalQuantity = createSelector((state: RootState) => state.cart.item, (item) => {
    const totalQuantity = Object.values(item).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return totalQuantity
})


export {getCartTotalQuantity} 
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;