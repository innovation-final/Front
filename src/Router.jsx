import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import PostDetail from './pages/PostDetail';
import WideStore from './context/WideContext';
import Community from './pages/Community';
import CommunityBoard from './pages/CommunityBoard';

function Router() {
    return (
        <WideStore>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/community" element={<Community />} />
                    <Route
                        path="/communityboard"
                        element={<CommunityBoard />}
                    />
                </Routes>
            </BrowserRouter>
        </WideStore>
    );
}

export default Router;
