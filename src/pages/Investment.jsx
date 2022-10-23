import React from 'react';
import { Helmet } from 'react-helmet';
import { useRecoilValue } from 'recoil';
import Layout from '../component/layout/Layout';
import InvestmentLayout from '../component/investment/InvestmentLayout';
import Tutorial from '../component/elements/Tutorial';
import tutorialState from '../atoms/tutorial/tutorialState';

function Investment() {
    const tutorial = useRecoilValue(tutorialState);

    return (
        <>
            <Layout>
                <Helmet>
                    <title>{`Stock's talk | 모의투자`}</title>
                </Helmet>
                <InvestmentLayout />
            </Layout>
            {tutorial ? <Tutorial /> : null}
        </>
    );
}

export default Investment;
