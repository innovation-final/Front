import React from 'react';
import Layout from '../component/layout/Layout';
import StockDetailContainer from '../component/stock/StockDetailContainer';

function StockDetail() {
    return (
        <Layout header sidebar>
            <StockDetailContainer />
        </Layout>
    );
}

export default StockDetail;
