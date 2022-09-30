import React from 'react';
import styled from 'styled-components';

function InterestNewsList() {
    return (
        <>
            <CardContent>
                <InterestTitle>뉴스제목</InterestTitle>
                <InterestContent>경향</InterestContent>
                <InterestContent>2022/09/04</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>뉴스제목</InterestTitle>
                <InterestContent>한국일보</InterestContent>
                <InterestContent>2022/09/04</InterestContent>
            </CardContent>
        </>
    );
}

export default InterestNewsList;

const CardContent = styled.div`
    border-bottom: 1px solid skyblue;
    margin: 5px;
    display: flex;
`;
const InterestTitle = styled.div`
    margin: 8px;
    flex-grow: ${props => props.flexRatio};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
    display: flex;

    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
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
