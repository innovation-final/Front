import React from 'react';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import ContentBox from '../component/elements/ContentBox';

import ChartSlider from '../component/main/ChartSlider';
import { LineChart, SampelChart } from '../component';

function Home() {
    return (
        <Layout header sidebar>
            <MainContainer>
                <ContentBox title="코스피/코스닥">
                    <ChartSlider />
                </ContentBox>
                <ContentBox title="관심종목">
                    <SampelChart />
                </ContentBox>
                <ContentBox title="인기종목"></ContentBox>
                <ContentBox title="수익률 높은 종목"></ContentBox>
            </MainContainer>
        </Layout>
    );
}

export default Home;
