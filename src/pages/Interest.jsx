import React from 'react';
import { Helmet } from 'react-helmet';
import InterestMain from '../component/interest/InterestMain';
import Layout from '../component/layout/Layout';

function Interest() {
    return (
        <Layout>
            <Helmet>
                <title>{`Stock's talk | 관심종목`}</title>
            </Helmet>
            <InterestMain />
        </Layout>
    );
}

export default Interest;
