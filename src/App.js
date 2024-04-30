import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import TopGifsPage from './components/pages/TopGifsPage';
import SearchPage from "./components/pages/SearchPage";
import RandomGifPage from "./components/pages/RandomGifPage";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topGifs" element={<TopGifsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/random" element={<RandomGifPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
