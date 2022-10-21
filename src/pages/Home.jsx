import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import MainContentBox from '../component/main/MainContentBox';
import { MainTableItem, MainTableName, MainStockIndex } from '../component';
import MainFavoriteStock from '../component/main/MainFavoriteStock';
import { stockAPI } from '../shared/api';
import LoadingSpinner from '../component/elements/LoadingSpinner';

function Home() {
    const keys = [
        '종목명',
        '현재가',
        '전일비',
        '등락률',
        '매수호가',
        '매도호가',
        '매수총잔량',
        '매도총잔량',
    ];
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, []);
    const { data, isLoading } = useQuery('stocks', () =>
        stockAPI.getStocks('kospi_vol'),
    );

    const { data: myStockData, isLoading: myStockIsLoading } = useQuery(
        ['stock'],
        () => stockAPI.getLikeStock(),
    );
    const myStock = myStockData?.data?.data;

    if (isLoading) return <LoadingSpinner />;
    const values = data.data.data;

    return (
        <Layout header sidebar>
            <Helmet>
                <title>{`Stock's talk | 홈`}</title>
            </Helmet>
            <MainContainer>
                <MainStockIndex />
                <MainFavoriteStock
                    myStock={myStock}
                    isLoading={myStockIsLoading}
                />
                <MainContentBox title="인기종목">
                    <Carousel indicators={false}>
                        <DivCarousel>
                            <MainTableName keys={keys} />
                            {values.slice(0, 5).map(value => (
                                <MainTableItem key={value[0]} values={value} />
                            ))}
                        </DivCarousel>
                        <DivCarousel>
                            <MainTableName keys={keys} />
                            {values.slice(5).map(value => (
                                <MainTableItem key={value[0]} values={value} />
                            ))}
                        </DivCarousel>
                    </Carousel>
                </MainContentBox>
                <MainContentBox title="수익률 높은 종목">
                    <Carousel indicators={false}>
                        <div>
                            <MainTableName keys={keys} />
                            {values.slice(0, 5).map(value => (
                                <MainTableItem key={value[0]} values={value} />
                            ))}
                        </div>
                        <div>
                            <MainTableName keys={keys} />
                            {values.slice(5).map(value => (
                                <MainTableItem key={value[0]} values={value} />
                            ))}
                        </div>
                    </Carousel>
                </MainContentBox>
            </MainContainer>
        </Layout>
    );
}

export default Home;

const DivCarousel = styled.div`
    width: 100%;
    height: 100%;
`;
