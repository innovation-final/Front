import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import StockInfo from '../stock/StockInfoBox';
import SampleChart from '../chart/SampleChart';
import { useResizeObserver } from '../../hooks/useResizeObserver';

const data = {
    doneInterest: false,
    code: '047400',
    name: '유니온머티리얼',
    market: 'KOSPI',
    date: '2022-10-11',
    open: 2905,
    high: 3100,
    low: 2830,
    close: 2895,
    volume: 17123628,
    tradingValue: 50738275375,
    change: 0.1265,
    prevPrice: {
        date: '2022-10-07',
        open: 2595,
        high: 2680,
        low: 2550,
        close: 2570,
        volume: 1820777,
        tradingValue: null,
        change: 0.007843138,
    },
};

function InvestmentInfoBox() {
    const ref = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(ref, optionalCallback);

    return (
        <StyleContainer>
            <TopContainer>
                <StockInfo stockData={data} />
            </TopContainer>
            <BottomContainer ref={ref}>
                <SampleChart
                    name=""
                    code="047400"
                    width={width}
                    height={height}
                />
            </BottomContainer>
        </StyleContainer>
    );
}

export default InvestmentInfoBox;

const StyleContainer = styled.div`
    width: 100%;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 10px;
    min-height: 30rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const TopContainer = styled.div`
    margin-bottom: 50px;
`;
const BottomContainer = styled.div`
    width: 100%;
    height: 100%;
`;
