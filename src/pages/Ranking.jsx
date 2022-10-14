import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../component/layout/Layout';
import RankingMain from '../component/ranking/RankingMain';

function Ranking() {
    return (
        <Layout>
            <Helmet>
                <title>{`Stock's talk | 랭킹페이지`}</title>
            </Helmet>
            <RankingMain />
        </Layout>
    );
}

export default Ranking;
