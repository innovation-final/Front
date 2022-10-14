import React from 'react';
import styled from 'styled-components';
import { dateParser } from '../../util/parser';

function InterestNewsList({ news }) {
    console.log('dd', news);
    return (
        <CardContent onClick={() => window.open(`${news.originallink}`)}>
            <InterestTitle>
                {`${
                    news.title.length > 35
                        ? `${news.title.slice(0, 35)} ...`
                        : news.title
                }`}
            </InterestTitle>
            <InterestContent>{dateParser(news.pubDate)}</InterestContent>
        </CardContent>
    );
}

export default InterestNewsList;

const CardContent = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin: 5px;
    height: 61px;
    display: flex;
`;
const InterestTitle = styled.div`
    margin: 10px;
    margin-left: 30px;
    cursor: pointer;
    flex-grow: ${props => props.flexRatio};
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    width: 300%;
    white-space: nowrap;
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
