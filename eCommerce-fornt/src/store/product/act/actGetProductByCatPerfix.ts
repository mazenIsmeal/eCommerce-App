import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customType/product";

type TResponse = TProduct

const actGetProductByCatPerfix = createAsyncThunk('products/actGetProductByCatPerfix', async (prefix: string, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const response = await axios.get<TResponse>(`http://localhost:4500/products?cat_prefix=${prefix}`);
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message)
        }else {
            return rejectWithValue('An unexpected error')
        }
    }
})

export default actGetProductByCatPerfix