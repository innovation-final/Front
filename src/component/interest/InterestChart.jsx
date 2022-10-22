import React, { useMemo } from 'react';
import styled from 'styled-components';
import useGetStockInfo from '../../hooks/useGetStockInfo';
import InterestChartList from './InterestChartList';
import useWindowSize from '../../hooks/useWindowSize';
import { StockInfoBox } from '../stock/index';

function InterestChart({ code }) {
    const { data } = useGetStockInfo(code);

    const name = data && data.name;
    const market = data && data.market;
    const current = data && data.current;
    const stockDetail = data && data.stockDetail;
    const doneInterest = data && data.doneInterest;

    const prevPrice = stockDetail && stockDetail.at(-1);
    const stockData = {
        doneInterest,
        code,
        name,
        market,
        ...current,
        prevPrice,
    };
    console.log(stockData && stockData);
    // const volumeData = stockDetail && stockDetail.slice(-10);
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);
    console.log(isPC);

    return (
        <div>
            <StockInfoWrapper>
                {code !== '' && (
                    <StockInfoBox
                        stockData={stockData && stockData}
                        isPC={isPC}
                    />
                )}{' '}
                <InterestChartList />
            </StockInfoWrapper>
            {/* <TradingVolumeBox
                volumeData={volumeData && volumeData}
                isPC={isPC}
            /> */}
        </div>
    );
}

export default InterestChart;
const StockInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1400px) {
        display: flex;
        flex-direction: column;
        width: 75%;
    }
`;
