import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { stockAPI } from '../../shared/api';
import { isDarkState, slideStockState } from '../../atoms/common/commonState';

function TodayStock() {
    const navigate = useNavigate();
    const { data, refetch } = useQuery(
        'stocks/rank',
        () => stockAPI.getStocks('kospi_rate'),
        {
            refetchOnWindowFocus: false,
        },
    );
    const info = data?.data.data;

    const isDark = useRecoilValue(isDarkState);

    const [stocks, setStocks] = useState([]);
    const [count, setCount] = useRecoilState(slideStockState);
    useEffect(() => {
        if (info) setStocks(info);
    }, [info]);
    useEffect(() => {
        setTimeout(() => {
            setCount(props => (props + 1) % 10);
        }, 10000);
        if (count === 10) {
            refetch();
        }
    }, [count]);
    const colorParser = value => {
        if (value === 0) return isDark === 'darkMode' ? 'white' : 'black';
        if (value < 0) return '#2980b9';
        if (value > 0) return '#e74c3c';
        return 'black';
    };

    return (
        <Wrapper>
            <Today>오늘의 주식현황 -</Today>
            <StyleLatestPost>
                {stocks.map(stock => {
                    return (
                        <PostBox
                            key={stock.stockCode}
                            count={count}
                            onClick={() =>
                                navigate(`/stock/${stock.stockCode}`)
                            }
                        >
                            <Title>{`${stock.stockName}`}</Title>
                            <Author
                                colorParser={colorParser(stock.fluctuationRate)}
                            >{`${stock.fluctuationRate}%`}</Author>
                        </PostBox>
                    );
                })}
            </StyleLatestPost>
        </Wrapper>
    );
}

export default TodayStock;

const Wrapper = styled.div`
    display: flex;
`;

const StyleLatestPost = styled.div`
    letter-spacing: -1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 60px;
    justify-content: center;
    height: 60px;
    overflow-y: hidden;
`;

const PostBox = styled.div`
    display: flex;
    margin: 20px 0px;
    height: 60px;
    transform: translateY(${props => 453 - props.count * 100}px);
    transition: all ease-in-out 0.5s;
    cursor: pointer;
`;
const Title = styled.div`
    margin-right: 10px;
    letter-spacing: -1px;
`;

const Today = styled.div`
    margin-right: 10px;
    letter-spacing: -1px;
    line-height: 4;
`;

const Author = styled.div`
    color: ${props => props.colorParser};
`;
