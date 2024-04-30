import React from 'react';

function GifCard({ gif }) {
    return (
        <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-lg">
            <img className="w-full" src={gif.images.fixed_height.url} alt={gif.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gif.title}</div>
            </div>
        </div>
    );
}

export default GifCard;

