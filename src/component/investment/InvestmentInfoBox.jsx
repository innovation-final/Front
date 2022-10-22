import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import StockInfo from '../stock/StockInfoBox';
// import { ChartCandleStick } from '../chart';
import useResizeObserver from '../../hooks/useResizeObserver';
import currentStockCode from '../../atoms/investment/stockState';
import useGetStockInfo from '../../hooks/useGetStockInfo';
import LoadingSpinner from '../elements/LoadingSpinner';
import GraphBox from '../stock/GraphBox';

function InvestmentInfoBox() {
    const ref = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useResizeObserver(ref, optionalCallback);

    const code = useRecoilValue(currentStockCode);
    const { data, isLoading } = useGetStockInfo(code);

    const renderChart = _code => {
        return <GraphBox code={_code} />;
    };

    const prevPrice = data && data.stockDetail.at(-1);
    const stockData = data && {
        code: data.code,
        doneInterest: data.doneInterest,
        name: data.name,
        market: data.market,
        ...data.current,
        prevPrice,
    };

    return (
        <StyleContainer>
            {isLoading ? (
                <LoadingWrapper>
                    <LoadingSpinner />
                </LoadingWrapper>
            ) : (
                <Wrapper>
                    <TopContainer>
                        <StockInfo stockData={stockData} />
                    </TopContainer>
                    <BottomContainer ref={ref}>
                        <BottomWrapper>
                            {code ? renderChart(code) : <LoadingSpinner />}
                        </BottomWrapper>
                    </BottomContainer>
                </Wrapper>
            )}
        </StyleContainer>
    );
}

export default InvestmentInfoBox;

const StyleContainer = styled.div`
    width: 100%;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    margin-bottom: 10px;
    max-height: 29rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const TopContainer = styled.div``;
const BottomContainer = styled.div`
    width: 100%;
`;

const BottomWrapper = styled.div``;

const Wrapper = styled.div`
    padding: 1rem;
`;

const LoadingWrapper = styled.div`
    min-width: 100%;
    min-height: 29rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
