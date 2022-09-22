import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';

const initialState = {
    post: [],
    isLoading: false,
    error: null,
    last: false,
    totalPage: 0,
};

// 글쓰기POST
export const addBoardpost = createAsyncThunk(
    '/addBoardpost',
    async (payload, thunkAPI) => {
        try {
            const data = await api.post('/auth/post', payload);
            return thunkAPI.fulfillWithValue({
                data: data.data,
                request: payload,
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

// 조회GET
export const getBoardpost = createAsyncThunk(
    '/getBoardpost',
    async (postId, thunkAPI) => {
        try {
            const data = await api.get('/post');
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

// 삭제 delete
export const deleteBoardpost = createAsyncThunk(
    '/deleteBoardpost',
    async (payload, thunkAPI) => {
        try {
            await api.delete(`/auth/post/${payload}`);
            return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        // addboard Thunk
        [addBoardpost.pending]: state => {
            state.isLoading = true;
            state.success = false;
        },
        [addBoardpost.fulfilled]: (state, action) => {
            state.isLoading = false;
            const newState = state;
            newState.success = false;
            newState.post = [action.payload.request, ...newState.post];
            return newState;
            // state.isLoading = true;
            // state.success = false;
            // state.post = [action.payload.info, ...state.post];
            // return state;
        },

        [addBoardpost.rejected]: (state, action) => {
            const newState = state;
            newState.success = false;
            newState.error = action.payload.data;
        },
        [getBoardpost.pending]: state => {
            const newState = state;
            newState.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [getBoardpost.fulfilled]: (state, action) => {
            const newState = state;
            newState.isLoading = false;
            newState.post = action.payload.data;
        },
        [getBoardpost.rejected]: (state, action) => {
            const newState = state;
            newState.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            newState.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        // deleteTravelCard Thunk
        [deleteBoardpost.pending]: state => {
            const newState = state;
            newState.success = true;
        },
        [deleteBoardpost.fulfilled]: (state, action) => {
            const newState = state;
            newState.success = false;
            newState.post = state.posts.filter(
                postone => postone.id !== action.payload,
            );
        },
        [deleteBoardpost.rejected]: (state, action) => {
            const newState = state;
            newState.success = false;
            newState.error = action.payload;
        },
    },
});
export default post.reducer;
