import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@types";
import { axiosErrorHandler } from "@util/index";

type TResponse = TProduct[]

const actGetWishlist = createAsyncThunk('wishlist/actGetWishlist', async (_, thunkAPI) => {
    const {rejectWithValue, fulfillWithValue, signal} = thunkAPI

    try {
        const userWishlist = await axios.get<{productId: number}[]>('/wishlist?userId=1', {signal})

        if(!userWishlist.data.length) {
            return fulfillWithValue([])
        }

        const concatItemsId = userWishlist.data.map((el) => `id=${el.productId}`).join('&');

        const response = await axios.get<TResponse>(`products?${concatItemsId}`)

        return response.data

    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetWishlist