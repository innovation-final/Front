import { configureStore } from '@reduxjs/toolkit';
import user from '../modules/userSlice';
import post from '../modules/postSlice';

const store = configureStore({
    reducer: { user, post },
});

export default store;
