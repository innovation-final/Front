import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { esUSNumberParser } from '../../util/parser';

function TableItem({ values }) {
    const {
        rank,
        stockName,
        lastPrice,
        fluctuationRate,
        lowPrice,
        highPrice,
        stockCode,
    } = values;
    const navigate = useNavigate();
    return (
        <StyleTableItem>
            <ItemList onClick={() => navigate(`/stock/${stockCode}`)}>
                <ItemRanking>{rank}</ItemRanking>
                <ItemContent>{stockName}</ItemContent>
                <ItemContent>{esUSNumberParser(lastPrice)}</ItemContent>
                <ItemMutateContent
                    isMinus={fluctuationRate < 0}
                >{`${fluctuationRate}%`}</ItemMutateContent>
                <ItemContent>{esUSNumberParser(lowPrice)}</ItemContent>
                <ItemContent>{esUSNumberParser(highPrice)}</ItemContent>
            </ItemList>
        </StyleTableItem>
    );
}

export default TableItem;

const StyleTableItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 98%;
    height: 30px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding: 10px;
    background-color: ${props => props.theme.bgColor};
    &:hover {
        opacity: 0.7;
        background-color: ${props => props.theme.hoverColor};
    }
`;

const ItemList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
`;
const ItemRanking = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 95%;
`;
const ItemMutateContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
    color: ${props => (props.isMinus ? '#2980b9' : '#e74c3c')};
`;
