import type { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";
import { axiosErrorHandler } from "@util/index";
import axios from "axios";

const actGetProductsItem = createAsyncThunk('cart/actGetProductsItem', async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI
    const {cart} = getState() as RootState;
    const itemsId = Object.keys(cart.item)

    if(!itemsId.length) {
        return fulfillWithValue([])
    }

    type TResponse = TProduct[]
    
    try {
        const concatItemsID = itemsId.map((el) => `id=${el}`).join('&')
        const response = await axios.get<TResponse>(`/products?${concatItemsID}`, {signal})
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }

})

export default actGetProductsItem;