import React, { useState, useEffect } from 'react';
import { fetchTrendingGifs } from '../service/apiService';
import GifCard from './GifCard';

function GifDisplay() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const subscription = fetchTrendingGifs().subscribe({
            next(response) {
                setGifs(response.data.data);
            },
            error(error) {
                console.error('Ошибка при загрузке гифок:', error);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center">
            {gifs.map(gif => (
                <GifCard key={gif.id} gif={gif} />
            ))}
        </div>
    );
}

export default GifDisplay;
