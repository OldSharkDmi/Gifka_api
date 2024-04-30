import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../features/notificationsSlice';

const Notifications = () => {
    const notification = useSelector(state => state.notifications.notification);
    const dispatch = useDispatch();

    return notification ? (
        <div className="fixed bottom-0 right-0 m-4 p-2 bg-blue-500 text-white rounded shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            {notification.message}
            <button onClick={() => dispatch(clearNotification())} className="ml-2">
                &#10005;
            </button>
        </div>
    ) : null;
};

export default Notifications;
