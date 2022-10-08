import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../component/layout/Layout';
import MypageMain from '../component/mypage/MypageMain';

function Mypage() {
    return (
        <Layout>
            <Helmet>
                <title>{`Stock's talk | 마이페이지`}</title>
            </Helmet>
            <MypageMain />
        </Layout>
    );
}

export default Mypage;
