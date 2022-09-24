import { isNumber } from 'lodash';
import React from 'react';
import styled from 'styled-components';

function TableItem({ values }) {
    const parser = value => {
        if (isNumber(value)) {
            return value.toLocaleString('en-US');
        }
        return value;
    };
    return (
        <StyleTableItem>
            <ItemList>
                {values.map(value => (
                    <ItemContent key={value}>{parser(value)}</ItemContent>
                ))}
            </ItemList>
        </StyleTableItem>
    );
}

export default TableItem;

const StyleTableItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    border: 1px solid skyblue;
    border-radius: 15px;
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
