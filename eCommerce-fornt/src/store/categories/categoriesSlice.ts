import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import type { TLoading } from "@customType/shared";
import type { TCategory } from "@customType/category";

interface ICategories {
    records: TCategory[],
    loading: TLoading,
    error: string | null
}

const initialState: ICategories = {
    records: [],
    loading: 'idle',
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        cleanUpCategories: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            if(action.payload && typeof action.payload ==='string') {
                state.error = action.payload
            }
        })
    }
})

export {actGetCategories}
export const {cleanUpCategories} = categoriesSlice.actions
export default categoriesSlice.reducer