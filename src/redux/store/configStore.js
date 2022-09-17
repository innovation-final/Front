import { configureStore } from '@reduxjs/toolkit';
import user from '../modules/userSlice';

const store = configureStore({
    reducer: { user },
});

export default store;
