import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { stockAPI } from '../../shared/api';
import { dateParser } from '../../util/parser';

function InterestNewsList({ interestStocksNews }) {
    const { code } = interestStocksNews;
    const { data } = useQuery(['stocknews', code], () =>
        stockAPI.likeNewsStock(code),
    );
    const stockNews = data?.data.data;

    return (
        <>
            {' '}
            {stockNews &&
                stockNews.map(stockNewslike => (
                    <CardContent key={stockNewslike.title}>
                        <InterestTitle>{stockNewslike.title}</InterestTitle>
                        <InterestContent>
                            {dateParser(stockNewslike.pubDate)}
                        </InterestContent>
                    </CardContent>
                ))}
        </>
    );
}

export default InterestNewsList;

const CardContent = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin: 5px;
    display: flex;
`;
const InterestTitle = styled.div`
    margin: 8px;
    flex-grow: ${props => props.flexRatio};
    font-size: 14px;
    font-weight: 600;

    display: flex;
    flex-direction: row;
    width: 120%;
    align-items: center;
`;

const InterestContent = styled.div`
    flex-grow: 1;
    font-size: 14px;
    letter-spacing: -1px;
    color: #82807c;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
