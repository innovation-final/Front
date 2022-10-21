import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import StockInfo from '../stock/StockInfoBox';
import SampleChart from '../chart/SampleChart';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import currentStockCode from '../../atoms/investment/stockState';
import useGetStockInfo from '../../hooks/useGetStockInfo';
import LoadingSpinner from '../elements/LoadingSpinner';

function InvestmentInfoBox() {
    const ref = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(ref, optionalCallback);

    const code = useRecoilValue(currentStockCode);
    const { data, isLoading } = useGetStockInfo(code);

    const renderChart = (_code, _width, _height) => {
        return (
            <SampleChart name="" code={_code} width={_width} height={_height} />
        );
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
                <LoadingSpinner />
            ) : (
                <Wrapper>
                    <TopContainer>
                        <StockInfo stockData={stockData} />
                    </TopContainer>
                    <BottomContainer ref={ref}>
                        {code ? (
                            renderChart(code, width, height)
                        ) : (
                            <LoadingSpinner />
                        )}
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

const Wrapper = styled.div`
    padding: 2rem;
`;
