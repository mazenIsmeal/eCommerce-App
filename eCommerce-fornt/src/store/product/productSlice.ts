import { createSlice } from "@reduxjs/toolkit";
import actGetProductByCatPerfix from "./act/actGetProductByCatPerfix";
import { type TProduct, type TLoading, isString } from "@types";

interface TProducts {
    records: TProduct[],
    loading: TLoading,
    error: string | null
}

const initialState: TProducts = {
    records: [],
    loading: 'idle',
    error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductByCatPerfix.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProductByCatPerfix.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetProductByCatPerfix.rejected, (state, action) => {
            state.loading = 'failed'
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
    }
})

export const {productCleanUp} = productSlice.actions
export {actGetProductByCatPerfix}
export default productSlice.reducer