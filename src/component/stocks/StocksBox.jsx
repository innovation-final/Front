import React, { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '../elements/SelectBox';
import TableItem from './TableItem';
import TableName from './TableName';

const options = ['코스피', '코스닥'];
const defaultOption = '코스피';
const keys = [
    '종목명',
    '현재가',
    '전일비',
    '등락률',
    '매수호가',
    '매도호가',
    '매수총잔량',
    '매도총잔량',
];
const values = [
    ['카카오', 9880, 1870, '23.35%', 7507, 8702, 44, 0],
    ['다음', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ['네이버', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ['삼성전자', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ['현대중공업', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ['(주) SK이노베이션', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
    ['빽다방', 14200, 7870, '23.35%', 4567, 7850, 44, 0],
];

function StocksBox() {
    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };
    return (
        <StyleStocksBox>
            <StyleHeader>
                <Title>주식전체</Title>
                <SelectBox
                    options={options}
                    selectedOption={option}
                    _getOption={getOption}
                />
            </StyleHeader>
            <StocksContainer>
                <TableName keys={keys} />
                {values.map(value => (
                    <TableItem values={value} />
                ))}
            </StocksContainer>
        </StyleStocksBox>
    );
}

export default StocksBox;

const StyleStocksBox = styled.div``;
const StyleHeader = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-size: 25px;
    margin-right: 30px;
`;
const StocksContainer = styled.div`
    width: 90%;
    border-radius: 10px;
    padding: 30px;
`;
