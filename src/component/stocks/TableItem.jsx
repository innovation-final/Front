import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoritesIcon from '../elements/FavoritesIcon';
import { esUSNumberParser, millionUnit } from '../../util/parser';

function TableItem({ values }) {
    const {
        rank,
        stockName,
        lastPrice,
        fluctuationRate,
        lowPrice,
        highPrice,
        tradingValue,
        volume,
        stockCode,
    } = values;
    const navigate = useNavigate();
    return (
        <StyleTableItem>
            <ItemList onClick={() => navigate(`/stock/${stockCode}`)}>
                <ItemContent>{rank}</ItemContent>
                <ItemContent>{stockName}</ItemContent>
                <ItemContent>{esUSNumberParser(lastPrice)}</ItemContent>
                <ItemMutateContent
                    isMinus={fluctuationRate < 0}
                >{`${fluctuationRate}%`}</ItemMutateContent>
                <ItemContent>{esUSNumberParser(lowPrice)}</ItemContent>
                <ItemContent>{esUSNumberParser(highPrice)}</ItemContent>
                <ItemContent>
                    {esUSNumberParser(millionUnit(tradingValue))}
                </ItemContent>
                <ItemContent>
                    {esUSNumberParser(millionUnit(volume))}
                </ItemContent>
            </ItemList>
            <Favorites>
                <FavoritesIcon />
            </Favorites>
        </StyleTableItem>
    );
}

export default TableItem;

const StyleTableItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid skyblue;
    padding: 10px;
    margin-bottom: 10px;
    background-color: white;
`;

const ItemList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
`;
const ItemMutateContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
    color: ${props => (props.isMinus ? 'blue' : 'red')};
`;

const Favorites = styled.div`
    position: absolute;
    left: -10px;
    cursor: pointer;
`;
