import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mypageAPI } from '../../shared/api';

/** InitialState */
const initialState = {
    loading: false,
    userInfo: null, // 유저데이터를 받아서 넣음.
    loginSuccess: false,
    error: null,
};

/** THUNK */
export const userUpdate = createAsyncThunk(
    'user/userUpdate',
    async (payload, thunkAPI) => {
        try {
            const response = await mypageAPI.patchMypage(payload);
            console.log(response);
            return thunkAPI.fulfillWithValue(response);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

/** USERSLICE */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [userUpdate.rejected]: (state, payload) => {
            state.loading = false;
            state.error = payload;
        },
        [userUpdate.fulfilled]: (state, payload) => {
            console.log(payload);
        },
        [userUpdate.rejected]: (state, payload) => {
            console.log(payload);
        },
    },
});

export default userSlice.reducer;
