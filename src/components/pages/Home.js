import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNotification, clearNotification } from '../../features/notificationsSlice';
import Button from "../Button";
import Notifications from "../Notifications";
import handleSurpriseClick from "./handleSurpriseClick";
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNotification({ id: new Date().getTime(), message: "React Redux работает" }));

        return () => {
            dispatch(clearNotification());
        };
    }, [dispatch]);

    return (
        <main className="flex-grow bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Приложение для просмотра гифок
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Это приложение позволяет пользователям искать и просматривать различные гифки.
                    Используйте поиск, вывод топа и т.д.
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <Button onClick={handleSurpriseClick}>Сюрприз!</Button>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Войти
                </Link>
            </div>
            <Notifications/>
        </main>
    );
}

export default Home;
