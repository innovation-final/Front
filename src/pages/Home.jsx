import React, { useRef } from 'react';
import Layout from '../component/layout/Layout';
import MainContainer from '../component/main/MainContainer';
import ChartSlider from '../component/main/ChartSlider';
import { MainContentBox, MainStock, SampelChart } from '../component';
import TableName from '../component/stocks/TableName';
import TableItem from '../component/stocks/TableItem';
import styled from 'styled-components';

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
    const values = [
        ['카카오', 9880, 1870, '23.35%', 7507, 8702, 44, 0],
        ['다음', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['네이버', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['삼성전자', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['현대중공업', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['(주) SK이노베이션', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['빽다방', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['현대중공업', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['(주) SK이노베이션', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
        ['빽다방', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ];

    return (
        <Layout header sidebar>
            <MainContainer>
                <MainContentBox title="코스피/코스닥">
                    <ChartSlider
                        width={
                            divRef?.current ? divRef.current.offsetWidth : '400'
                        }
                    />
                </MainContentBox>
                <MainContentBox title="관심종목">
                    <SampelChart />
                </MainContentBox>
                <MainContentBox title="인기종목">
                    <StocksContainer>
                        <TableName keys={keys} />
                        {values.map(value => (
                            <TableItem key={value[0]} values={value} />
                        ))}
                    </StocksContainer>
                </MainContentBox>
                <MainContentBox title="수익률 높은 종목">
                    <MainStock />
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
