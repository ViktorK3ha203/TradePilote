import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;