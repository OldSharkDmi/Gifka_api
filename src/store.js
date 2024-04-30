import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './features/notificationsSlice';

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer
    }
});
