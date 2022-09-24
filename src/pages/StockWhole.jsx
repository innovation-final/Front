import React from 'react';
import Layout from '../component/layout/Layout';
import StocksBox from '../component/stocks/StocksBox';

function StockWhole() {
    return (
        <Layout header sidebar>
            <StocksBox />
        </Layout>
    );
}

export default StockWhole;
