import React from 'react';
import styled from 'styled-components';

function MyStocks({ stock }) {
    console.log(stock);
    const { stockName, profit, returnRate, amount, avgBuying } = stock;
    return (
        <StyleTableName>
            <TextLayout>{stockName}</TextLayout>{' '}
            <TextLayout>{avgBuying}원</TextLayout>
            <StockContent isMinus={profit < 0}>{`${profit}원`}</StockContent>
            <StockContent isMinus={returnRate < 0}>
                {(returnRate * 100).toFixed(3)}%
            </StockContent>
            <TextLayout>{amount}</TextLayout>
        </StyleTableName>
    );
}

export default MyStocks;
const TextLayout = styled.p`
    text-align: center;
    letter-spacing: -1px;
    white-space: nowrap;
    width: 100%;
`;
const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 25px;
    justify-content: space-around;
    border-radius: 15px;
    margin-bottom: 5px;
`;
const StockContent = styled.p`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
    color: ${props => (props.isMinus ? '#2980b9' : '#e74c3c')};
`;
