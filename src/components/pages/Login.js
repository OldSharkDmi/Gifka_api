import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/notificationsSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Пожалуйста, введите имя пользователя и пароль.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            const { success, role, message, access_token } = response.data;
            if (success) {
                dispatch(setUser(username)); // cохраннеи имя юзерк в хранилище редукс
                navigate('/');
            } else {
                setError(message);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <main className="flex-grow bg-white p-8">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Вход</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Войти
                    </button>
                    {error && <div className="text-red-500">{error}</div>}
                </form>
            </div>
        </main>
    );
}

export default Login;
