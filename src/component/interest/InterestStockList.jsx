import React from 'react';
import styled from 'styled-components';

function InterestStockList() {
    return (
        <>
            <CardContent>
                <InterestTitle>카카오</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>가온</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>엘지</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>삼성</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>카카오</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>가온</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>엘지</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>삼성</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>카카오</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>가온</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>엘지</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
            <CardContent>
                <InterestTitle>삼성</InterestTitle>
                <InterestContent>9,880</InterestContent>
                <InterestContent>1535</InterestContent>
                <InterestContent>23%</InterestContent>
            </CardContent>
        </>
    );
}

export default InterestStockList;

const CardContent = styled.div`
    border: 2px solid #ceecff;
    border-radius: 15px;
    margin: 15px;
    display: flex;
    height: 61px;
    cursor: pointer;
    &:hover {
        border: 2px solid #95d2f8;
        background-color: #cef3ff;
    }
`;
const InterestTitle = styled.div`
    margin: 8px;
    font-size: 25px;

    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
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
