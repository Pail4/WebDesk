import { configureStore } from '@reduxjs/toolkit';
import main from './slice';

export const store = configureStore({
    reducer: main,
    devTools: process.env.NODE_ENV !== 'production'
});
