import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';
import GifCard from '../GifCard';
import { fetchRandomGif } from '../../service/apiService';
import Loader from '../Loader';

function RandomGifPage() {
    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadRandomGif = () => {
        setLoading(true);
        const subscription = fetchRandomGif().subscribe({
            next(response) {
                setGif(response.data.data);
                setLoading(false);
            },
            error(err) {
                console.error('Ошибка при загрузке гифки:', err);
                setLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    };

    useEffect(() => {
        loadRandomGif();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {loading ? <Loader /> : gif && <GifCard gif={gif} />}
            <Button onClick={loadRandomGif}>Обновить</Button>
        </div>
    );
}

export default RandomGifPage;
