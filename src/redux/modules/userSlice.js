import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../../shared/api';

/** InitialState */
const initialState = {};

/** THUNK */

/** USERSLICE */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default userSlice.reducer;
