import { isNumber } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoritesIcon from '../elements/FavoritesIcon';

const MainTableItem = ({ values = [] }) => {
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
                {values.map((value, idx) => (
                    <ItemContent key={`${value}${idx}`}>
                        {parser(value)}
                    </ItemContent>
                ))}
            </ItemList>
        </StyleTableItem>
    );
};

export default MainTableItem;

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
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
`;
