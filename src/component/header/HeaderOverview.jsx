import React, { useContext } from 'react';
import styled from 'styled-components';
import { WideContext } from '../../context/WideContext';

function HeaderOverview() {
    const context = useContext(WideContext);
    const { wide } = context;
    return (
        <StyleOverview wide={wide}>
            <StockInfo>오늘의 주식현황 - 삼성전자 21.08 ▲</StockInfo>
            <LatestPost>최신 글 - 오늘 떡상 각인가? written by 개미</LatestPost>
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
const LatestPost = styled.div`
    letter-spacing: -1px;
`;
