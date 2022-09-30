import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';
// const fields = ['날짜', '증가', '전일비', '등락률', '거래량'];

function TradingVolumeBox({ isPC }) {
    return (
        <StyleTradingVolumeBox isPC={isPC}>
            <Title>순매매 거래량</Title>
            <ContentBox>순매매 거래량</ContentBox>
        </StyleTradingVolumeBox>
    );
}

export default TradingVolumeBox;

const StyleTradingVolumeBox = styled.div`
    width: ${props => (props.isPC ? '23' : '100')}%;
`;

const Title = styled.div`
    height: 60px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;
