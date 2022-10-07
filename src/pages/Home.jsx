import React, { useEffect, useMemo, useRef } from 'react';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import styled from 'styled-components';
import MainContentBox from '../component/main/MainContentBox';
import Carousel from 'react-material-ui-carousel';
import {
    StockIndex,
    SampleChart,
    MainTableItem,
    MainTableName,
    MainStockIndex,
    MainFavoriteStock,
} from '../component';
import { stockAPI } from '../shared/api';
import LoadingSpinner from '../component/elements/LoadingSpinner';
import { useQuery } from 'react-query';

function Home() {
    const divRef = useRef(null);
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

    const { data, isLoading } = useQuery('stocks', () =>
        stockAPI.getStocks('kospi_vol'),
    );

    if (isLoading) return <LoadingSpinner />;
    const values = data.data.data;

    return (
        <Layout header sidebar>
            <MainContainer>
                <MainStockIndex />
                <MainFavoriteStock />
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

const StocksContainer = styled.div`
    width: 90%;
    border-radius: 10px;
    padding: 30px;
`;

const DivCarousel = styled.div`
    width: 100%;
    height: 100%;
`;
