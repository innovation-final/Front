import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import WideStore from './context/WideContext';
import Community from './pages/Community';
import CommunityBoard from './pages/CommunityBoard';
import BoardWrite from './component/community/BoardWrite';
import Redirect from './pages/Redirect';
import BoardEdit from './component/community/BoardEdit';
import PostDetail from './pages/PostDetail';

function Router() {
    return (
        <WideStore>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/community" element={<Community />} />
                    <Route
                        path="/communityboardwrite"
                        element={<BoardWrite />}
                    />
                    <Route
                        path="/communityboard"
                        element={<CommunityBoard />}
                    />
                    <Route path="/boardedit" element={<BoardEdit />} />
                </Routes>
            </BrowserRouter>
        </WideStore>
    );
}

export default Router;
