import { createSlice } from "@reduxjs/toolkit";
import wishlistToggle from "./act/actWishlistToggle";

interface IWishlist {
    itemsId: number[],
    error: null | string
}

const initialState: IWishlist = {
    itemsId: [],
    error: null
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(wishlistToggle.pending, (state) => {
            state.error = null
        })
        builder.addCase(wishlistToggle.fulfilled, (state, action) => {
            if (action.payload.type === 'add') {
                state.itemsId.push(action.payload.id)
            } else {
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.id)
            }
        })
        builder.addCase(wishlistToggle.rejected, (state, action) => {
            if(action.payload && typeof action.payload ==='string') {
                state.error = action.payload
            }
        })
    }
})

export {wishlistToggle}
export default wishlistSlice.reducer