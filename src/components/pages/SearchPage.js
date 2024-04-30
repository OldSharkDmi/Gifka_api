import React, { useState, useEffect } from 'react';
import { fetchGifsByQuery } from '../../service/apiService';
import SearchInput from '../SearchInput';
import GifCard from '../GifCard';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const subscription = query.length > 0 && fetchGifsByQuery(query).subscribe({
            next(response) {
                setGifs(response.data.data);
            },
            error(error) {
                console.error('Ошибка при загрузке гифок:', error);
            }
        });

        return () => subscription && subscription.unsubscribe();
    }, [query]);

    return (
        <div>
            <SearchInput placeholder="Введите поисковый запрос..." value={query} onChange={handleSearchChange} />
            <div className="grid grid-cols-3 gap-4">
                {gifs.map(gif => (
                    <GifCard key={gif.id} gif={gif} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
