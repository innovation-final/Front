import React, { useRef } from 'react';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import styled from 'styled-components';
import MainContentBox from '../component/main/MainContentBox';
import Carousel from 'react-material-ui-carousel';
import { Kospi, SampleChart } from '../component/chart';
import TableName from '../component/stocks/TableName';
import TableItem from '../component/stocks/TableItem';
import { useQuery } from 'react-query';
import { stockAPI } from '../shared/api';
import LoadingSpinner from '../component/elements/LoadingSpinner';

function Home() {
    const divRef = useRef();
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

    console.log(divRef.current);

    return (
        <Layout header sidebar>
            <MainContainer>
                <MainContentBox title="코스피/코스닥" ref={divRef}>
                    <Carousel autoPlay={false} animation="slide">
                        <Kospi
                            width={
                                divRef.current
                                    ? divRef.current.offsetWidth * 0.9
                                    : '400px'
                            }
                        />
                        <SampleChart
                            width={
                                divRef.current
                                    ? divRef.current.offsetWidth * 0.9
                                    : '400px'
                            }
                        />
                    </Carousel>
                </MainContentBox>
                <MainContentBox title="관심종목">
                    <Carousel autoPlay={true} animation="slide">
                        <Kospi
                            width={
                                divRef.current
                                    ? divRef.current.offsetWidth * 0.9
                                    : '400px'
                            }
                        />
                        <SampleChart
                            width={
                                divRef.current
                                    ? divRef.current.offsetWidth * 0.9
                                    : '400px'
                            }
                            height={
                                divRef.current
                                    ? divRef.current.offsetHeight * 0.8
                                    : '400px'
                            }
                        />
                    </Carousel>
                </MainContentBox>
                <MainContentBox title="관심종목">
                    <Carousel>
                        <div>
                            <TableName keys={keys} />
                            {values.slice(0, 5).map(value => (
                                <TableItem key={value[0]} values={value} />
                            ))}
                        </div>
                        <div>
                            <TableName keys={keys} />
                            {values.slice(5).map(value => (
                                <TableItem key={value[0]} values={value} />
                            ))}
                        </div>
                    </Carousel>
                </MainContentBox>
                <MainContentBox title="인기종목">
                    <Carousel>
                        <DivCarousel>
                            <TableName keys={keys} />
                            {values.slice(0, 5).map(value => (
                                <TableItem key={value[0]} values={value} />
                            ))}
                        </DivCarousel>
                        <DivCarousel>
                            <TableName keys={keys} />
                            {values.slice(5).map(value => (
                                <TableItem key={value[0]} values={value} />
                            ))}
                        </DivCarousel>
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
    padding: 0 2.5%;
`;
