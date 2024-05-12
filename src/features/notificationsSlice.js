import { createSlice } from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        user: null,
        notifications: [],
    },
    reducers: {
        setNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
        clearNotification: (state) => {
            state.notifications = [];
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setNotification, clearNotification, setUser } = notificationsSlice.actions;

export const selectUser = (state) => state.notifications.user;

export default notificationsSlice.reducer;
