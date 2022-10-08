import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../component/layout/Layout';
import StocksBox from '../component/stocks/StocksBox';

function StockWhole() {
    return (
        <Layout header sidebar>
            <Helmet>
                <title>{`Stock's talk | 주식정보`}</title>
            </Helmet>
            <StocksBox />
        </Layout>
    );
}

export default StockWhole;
