import React, { useContext } from 'react';
import styled from 'styled-components';
import { WideContext } from '../../context/WideContext';
import LatestPost from './LatestPost';

function HeaderOverview() {
    const context = useContext(WideContext);
    const { wide } = context;
    return (
        <StyleOverview wide={wide}>
            <StockInfo>오늘의 주식현황 - 삼성전자 21.08 ▲</StockInfo>
            <LatestPost />
        </StyleOverview>
    );
}

export default HeaderOverview;

const StyleOverview = styled.div`
    transform: translateX(${props => (props.wide ? 290 : 70)}px);
    width: calc(50% + ${props => (props.wide ? 0 : 220)}px);
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
`;

const StockInfo = styled.div`
    letter-spacing: -1px;
    margin-right: 10%;
`;
