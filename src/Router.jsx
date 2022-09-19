import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PostDetail from './pages/PostDetail';
import WideStore from './context/WideContext';

function Router() {
    return (
        <WideStore>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                </Routes>
            </BrowserRouter>
        </WideStore>
    );
}

export default Router;
