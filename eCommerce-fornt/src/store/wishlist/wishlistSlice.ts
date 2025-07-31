import { createSlice } from "@reduxjs/toolkit";
import wishlistToggle from "./act/actWishlistToggle";
import actGetWishlist from "./act/actGetWishlist";
import { type TProduct, type TLoading, isString } from "@types";

interface IWishlist {
    itemsId: number[],
    productFullInfo: TProduct[]
    error: null | string,
    loading: TLoading
}

const initialState: IWishlist = {
    itemsId: [],
    productFullInfo: [],
    error: null,
    loading: 'idle'
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        productFullInfoCleanUp: (state) => {
            state.productFullInfo = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(wishlistToggle.pending, (state) => {
            state.error = null
        })
        builder.addCase(wishlistToggle.fulfilled, (state, action) => {
            if (action.payload.type === 'add') {
                state.itemsId.push(action.payload.id)
            } else {
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.id)
                state.productFullInfo = state.productFullInfo.filter((el) => el.id !== action.payload.id)
            }
        })
        builder.addCase(wishlistToggle.rejected, (state, action) => {
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
        // Get Wishlist
        builder.addCase(actGetWishlist.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetWishlist.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.productFullInfo = action.payload
        })
        builder.addCase(actGetWishlist.rejected, (state, action) => {
            state.loading = 'failed'
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})

export {wishlistToggle, actGetWishlist}
export const {productFullInfoCleanUp} = wishlistSlice.actions
export default wishlistSlice.reducer