import React from 'react';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import ContentBox from '../component/elements/ContentBox';
// import GoogleLogIn from '../component/login/GoogleLogIn';

function Home() {
    return (
        <Layout header sidebar>
            <MainContainer>
                <ContentBox title="코스피/코스닥" />
                <ContentBox title="관심종목" />
                <ContentBox title="인기종목" />
                <ContentBox title="수익률 높은 종목" />
            </MainContainer>
        </Layout>
    );
}

export default Home;
