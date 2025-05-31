import type { TProduct } from "@customType/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";
import axios from "axios";

const actGetProductsItem = createAsyncThunk('cart/actGetProductsItem', async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI
    const {cart} = getState() as RootState;
    const itemsId = Object.keys(cart.item)

    if(!itemsId.length) {
        return fulfillWithValue([])
    }

    type TResponse = TProduct[]
    
    try {
        const concatItemsID = itemsId.map((el) => `id=${el}`).join('&')
        const response = await axios.get<TResponse>(`/products?${concatItemsID}`)
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        } else {
            return rejectWithValue('An Error')
        }
    }

})

export default actGetProductsItem;