import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { v4 as uuid } from 'uuid';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import MainContentBox from '../component/main/MainContentBox';
import { MainTableItem, MainTableName, MainStockIndex } from '../component';
import MainFavoriteStock from '../component/main/MainFavoriteStock';
import { stockAPI } from '../shared/api';
import LoadingSpinner from '../component/elements/LoadingSpinner';

function Home() {
    const keys = ['랭킹', '종목명', '현재가', '등락률', '저가', '고가'];
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, []);
    const { data, isLoading } = useQuery('stocks', () =>
        stockAPI.getStocks('kospi_vol'),
    );
    const { data: rateData, isLoading: rateIsLoading } = useQuery(
        ['stocks', 'kospi_rate'],
        () => stockAPI.getStocks('kospi_rate'),
    );

    const { data: myStockData, isLoading: myStockIsLoading } = useQuery(
        ['stock'],
        () => stockAPI.getLikeStock(),
    );
    const myStock = myStockData?.data?.data;

    if (isLoading || rateIsLoading) return <LoadingSpinner />;
    const values = data.data.data;
    const rateValues = rateData.data.data;

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
                <MainContentBox title="인기종목 TOP 10">
                    <Carousel indicators={false}>
                        <DivCarousel>
                            <MainTableName keys={keys} />
                            {values.slice(0, 5).map(value => (
                                <MainTableItem key={uuid()} values={value} />
                            ))}
                        </DivCarousel>
                        <DivCarousel>
                            <MainTableName keys={keys} />
                            {values.slice(5).map(value => (
                                <MainTableItem key={uuid()} values={value} />
                            ))}
                        </DivCarousel>
                    </Carousel>
                </MainContentBox>
                <MainContentBox title="등락률 TOP 10">
                    <Carousel indicators={false}>
                        <div>
                            <MainTableName keys={keys} />
                            {rateValues.slice(0, 5).map(value => (
                                <MainTableItem key={uuid()} values={value} />
                            ))}
                        </div>
                        <div>
                            <MainTableName keys={keys} />
                            {rateValues.slice(5).map(value => (
                                <MainTableItem key={uuid()} values={value} />
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
