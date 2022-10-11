import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../component/layout/Layout';
import InvestmentLayout from '../component/investment/InvestmentLayout';

function Investment() {
    return (
        <Layout>
            <Helmet>
                <title>{`Stock's talk | 모의투자`}</title>
            </Helmet>
            <InvestmentLayout />
        </Layout>
    );
}

export default Investment;
