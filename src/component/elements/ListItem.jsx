import React from 'react';
import styled from 'styled-components';

function ListItem({ item, flexRatio }) {
    const itemRendering = () => {
        const result = [];
        result.push(<MainItem flexRatio={flexRatio}>{item[0]}</MainItem>);
        for (let i = 1; i < item.length; i += 1) {
            result.push(<Item>{item[i]}</Item>);
        }
        return result;
    };

    return <ItemBox>{itemRendering()}</ItemBox>;
}

export default ListItem;

const ItemBox = styled.div`
    width: 92%;
    padding: 10px;
    border-bottom: 1px solid skyblue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MainItem = styled.div`
    flex-grow: ${props => props.flexRatio};
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;
const Item = styled.div`
    flex-grow: 1;
    font-size: 14px;
    letter-spacing: -1px;
    display: flex;
    justify-content: flex-end;
`;
