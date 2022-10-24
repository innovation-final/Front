import React, { useMemo } from 'react';
import styled from 'styled-components';
import useGetStockInfo from '../../hooks/useGetStockInfo';
import useWindowSize from '../../hooks/useWindowSize';
import { ChartCandleStick } from '../chart/index';

function InterestChart({ code }) {
    const { data } = useGetStockInfo(code);

    const name = data && data.name;
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);

    return (
        <Wrapper>
            <StockInfoWrapper>
                {code !== '' && (
                    <ChartCandleStick
                        isPC={isPC}
                        code={code}
                        name={name}
                        height={200}
                    />
                )}
            </StockInfoWrapper>
        </Wrapper>
    );
}

export default InterestChart;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1400px) {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const StockInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1400px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 320px;
    }
`;
