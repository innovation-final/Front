import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import WideStore from './context/WideContext';
import CommunityBoard from './pages/CommunityBoard';
import BoardWrite from './component/community/BoardWrite';
import Redirect from './pages/Redirect';
import BoardEdit from './component/community/BoardEdit';
import PostDetail from './pages/PostDetail';
import Google from './server/Google';
import Kakao from './server/Kakao';
import Mypage from './pages/Mypage';

function Router() {
    return (
        <WideStore>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/community" element={<CommunityBoard />} />
                    <Route
                        path="/login/oauth2/code/google"
                        element={<Google />}
                    />
                    <Route
                        path="/login/oauth2/code/kakao"
                        element={<Kakao />}
                    />
                    <Route
                        path="/communityboardwrite"
                        element={<BoardWrite />}
                    />

                    <Route path="/boardedit/:id" element={<BoardEdit />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </BrowserRouter>
        </WideStore>
    );
}

export default Router;
