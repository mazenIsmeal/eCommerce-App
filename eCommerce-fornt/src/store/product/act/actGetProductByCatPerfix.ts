import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {axiosErrorHandler} from '@util/index'
import type { TProduct } from "@types";

type TResponse = TProduct

const actGetProductByCatPerfix = createAsyncThunk('products/actGetProductByCatPerfix', async (prefix: string, thunkAPI) => {
    const {rejectWithValue, signal} = thunkAPI
    try {
        const response = await axios.get<TResponse>(
            `/products?cat_prefix=${prefix}`,
            {signal}
        );
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actGetProductByCatPerfix