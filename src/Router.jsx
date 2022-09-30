import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import {
    Home,
    Login,
    Redirect,
    PostDetail,
    CommunityBoard,
    Mypage,
    StockWhole,
    StockDetail,
} from './pages';
import BoardWrite from './component/community/BoardWrite';
import BoardEdit from './component/community/BoardEdit';
import { Google, Kakao } from './server';
import Interest from './pages/Interest';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/redirect" element={<Redirect />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/community" element={<CommunityBoard />} />
                <Route path="/login/oauth2/code/google" element={<Google />} />
                <Route path="/login/oauth2/code/kakao" element={<Kakao />} />
                <Route path="/communityboardwrite" element={<BoardWrite />} />
                <Route path="/boardedit/:id" element={<BoardEdit />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/stock" element={<StockWhole />} />
                <Route path="/stock/:id" element={<StockDetail />} />
                <Route path="/interest" element={<Interest />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
