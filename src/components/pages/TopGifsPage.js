import React, { useState } from 'react';
import GifDisplay from '../GifDisplay';

function TopGifsPage() {
    const [showGifs, setShowGifs] = useState(true);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-center p-4 bg-gray-100 w-full border-b border-gray-200">
                <p className="text-sm text-gray-600">
                    Все изображения взяты из api и предоставляются только для некоммерческого использования.
                    Все права принадлежат их законным владельцам. Использование данных изображений может подлежать
                    определенным ограничениям. Автор не несёт ответсвенности за предоставленные изображения
                </p>
            </div>

            {showGifs ? (
                <>
                    <GifDisplay />
                    <button
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setShowGifs(false)}>Закрыть</button>
                </>
            ) : (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowGifs(true)}>Показать топ гифок</button>
            )}
        </div>
    );
}

export default TopGifsPage;
