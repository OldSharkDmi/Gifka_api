import {Link, Route, Routes} from 'react-router-dom';
import React from "react";

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 text-center">
            <div className="container mx-auto flex justify-between items-center">
                <h1>Дополнительное задание</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-orange-100 hover:text-orange-300">Домой</Link></li>
                        <li><Link to="/topGifs" className="text-orange-100 hover:text-orange-300">Топ гифок</Link></li>
                        <li><Link to="/random" className="text-orange-100 hover:text-orange-300">Случайная гифка</Link></li>
                        <li><Link to="/search" className="text-orange-100 hover:text-orange-300">Поиск гифок</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;
