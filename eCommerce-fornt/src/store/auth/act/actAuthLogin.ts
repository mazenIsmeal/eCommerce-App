import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TFormData = {
    email: string,
    password: string
}

type TResponse = {
    accessToken: string,
    user: {
        id: number,
        FirstName: string,
        LastName: string,
        email: string
    }
}

const actAuthLogin = createAsyncThunk('auth/actAuthLogin', async(formData: TFormData, thunk) => {
    const {rejectWithValue} = thunk
    try {
        const res = await axios.post<TResponse>('/login', formData);
        return res.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})


export default actAuthLogin;