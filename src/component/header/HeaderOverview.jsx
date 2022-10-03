import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import LatestPost from './LatestPost';
import { wideState } from '../../atoms/atoms';

function HeaderOverview() {
    const wide = useRecoilValue(wideState);
    return (
        <StyleOverview wide={wide}>
            <StockInfo>오늘의 주식현황 - 삼성전자 21.08 ▲</StockInfo>
            <LatestPost />
        </StyleOverview>
    );
}

export default HeaderOverview;

const StyleOverview = styled.div`
    width: 60%;
    transform: translateX(${props => (props.wide ? 290 : 70)}px);
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const StockInfo = styled.div`
    letter-spacing: -1px;
    margin-right: 10%;
`;
