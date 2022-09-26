import { isNumber } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoritesIcon from '../elements/FavoritesIcon';

function TableItem({ values }) {
    const navigate = useNavigate();
    const parser = value => {
        if (isNumber(value)) {
            return value.toLocaleString('en-US');
        }
        return value;
    };
    return (
        <StyleTableItem>
            <ItemList onClick={() => navigate(`/stock/${values[0]}`)}>
                {values.map(value => (
                    <ItemContent key={value}>{parser(value)}</ItemContent>
                ))}
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

const Favorites = styled.div`
    position: absolute;
    left: -10px;
    cursor: pointer;
`;
