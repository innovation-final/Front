import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../component/layout/Layout';
import StockDetailContainer from '../component/stock/StockDetailContainer';

function StockDetail() {
    return (
        <Layout header sidebar>
            <Helmet>
                <title>{`Stock's talk | 주식정보`}</title>
            </Helmet>
            <StockDetailContainer />
        </Layout>
    );
}

export default StockDetail;
