import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import StockInfo from '../stock/StockInfoBox';
import SampleChart from '../chart/SampleChart';
import LoadingSpinner from '../elements/LoadingSpinner';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { currentStockSelector } from '../../atoms/investment/stockState';

function InvestmentInfoBox() {
    const ref = useRef(null);
    const { code, name, market, current, stockDetail, doneInterest } =
        useRecoilValue(currentStockSelector);
    const prevPrice = stockDetail && stockDetail.at(-1);
    const stockData = {
        doneInterest,
        code,
        name,
        market,
        ...current,
        prevPrice,
    };

    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(ref, optionalCallback);

    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <StyleContainer>
                <TopContainer>
                    <StockInfo stockData={stockData} />
                </TopContainer>
                <BottomContainer ref={ref}>
                    <SampleChart
                        name=""
                        code={code}
                        width={width}
                        height={height}
                    />
                </BottomContainer>
            </StyleContainer>
        </React.Suspense>
    );
}

export default InvestmentInfoBox;

const StyleContainer = styled.div`
    width: 100%;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 10px;
    min-height: 25rem;
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
