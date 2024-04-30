import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notification: null
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload;
        },
        clearNotification: (state) => {
            state.notification = null;
        }
    }
});

export const { setNotification, clearNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
