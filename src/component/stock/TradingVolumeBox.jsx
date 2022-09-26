import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';
import List from '../elements/List';

const fields = ['날짜', '증가', '전일비', '등락률', '거래량'];
const items = [
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
    ['2022/09/24', '9,998', '1,787 ▼', '-23.87%', '31,087,457'],
];

function TradingVolumeBox({ isPC }) {
    return (
        <StyleTradingVolumeBox isPC={isPC}>
            <Title>순매매 거래량</Title>
            <ContentBox>
                <List fields={fields} items={items} flexRatio={1.5} />
            </ContentBox>
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
