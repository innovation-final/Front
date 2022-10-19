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
    console.log(info);

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
                            key={stock.id}
                            count={count}
                            onClick={() => navigate(`/stock/${stock.id}`)}
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
    line-height: 60px;
    justify-content: center;
    height: 60px;
`;

const StyleSlider = styled(Slider)``;

const PostBox = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
const Title = styled.p`
    margin-right: 10px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 170px;
`;

const Today = styled.div`
    margin-right: 10px;
    letter-spacing: -1px;
    line-height: 3.6;
`;

const Author = styled.p`
    color: ${props => props.colorParser};
`;
