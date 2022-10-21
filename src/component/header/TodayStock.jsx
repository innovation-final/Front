import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
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

    // eslint-disable-next-line no-unused-vars
    const colorParser = value => {
        if (value === 0) return isDark === 'darkMode' ? 'white' : 'black';
        if (value < 0) return '#2980b9';
        if (value > 0) return '#e74c3c';
        return 'black';
    };

    return (
        <Wrapper>
            <Today>오늘의 주식현황 -</Today>
            <StyleSlider
                dots={false}
                arrows={false}
                infinite
                autoplay
                autoplaySpeed={5000}
                slidesToShow={1}
                slidesToScroll={1}
                vertical
                verticalSwiping
            >
                {stocks.map(stock => {
                    return (
                        <PostBox
                            key={stock.stockCode}
                            count={count}
                            onClick={() =>
                                navigate(`/stock/${stock.stockCode}`)
                            }
                        >
                            <Div>
                                <Title>{`${stock.stockName}`}</Title>
                                <Author
                                    colorParser={colorParser(
                                        stock.fluctuationRate,
                                    )}
                                >
                                    {stock.fluctuationRate}%{' '}
                                    {stock.fluctuationRate >= 0 ? '▲' : '▼'}
                                </Author>
                            </Div>
                        </PostBox>
                    );
                })}
            </StyleSlider>
        </Wrapper>
    );
}

export default TodayStock;

const Wrapper = styled.div`
    letter-spacing: -1px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-width: 500px;
`;

const StyleSlider = styled(Slider)``;

const PostBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 0.9vw;
    height: 60px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 180px;
    font-size: 0.9vw;
    white-space: nowrap;
    height: 60px;
`;

const Today = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 0.9vw;

    white-space: nowrap;
    height: 60px;
`;

const Author = styled.p`
    color: ${props => props.colorParser};
`;
