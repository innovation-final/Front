import React from 'react';
import styled from 'styled-components';

function InterestStockList() {
    return (
        <>
            <CardContent>
                <InterestTitle>카카오</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>DSC인베스트먼트</InterestTitle>
                <InterestContent>9,880</InterestContent>

                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>대신밸런스제10호스팩</InterestTitle>
                <InterestContent>9,880</InterestContent>

                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>삼성</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>카카오</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>DSC인베스트먼트</InterestTitle>
                <InterestContent>9,880</InterestContent>

                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>대신밸런스제10호스팩</InterestTitle>
                <InterestContent>9,880</InterestContent>

                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>삼성</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
        </>
    );
}

export default InterestStockList;

const CardContent = styled.div`
    border: 2px solid ${props => props.theme.stockBorderColor};
    border-radius: 15px;
    margin: 15px;
    display: flex;
    height: 61px;
    cursor: pointer;
    &:hover {
        border: 2px solid ${props => props.theme.hoverBorderColor};
        background-color: ${props => props.theme.hoverColor};
    }
`;
const InterestTitle = styled.div`
    margin: 8px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    width: 200%;
    align-items: center;
    padding: 10px;
`;

const InterestContent = styled.div`
    font-size: 18px;
    color: #82807c;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
