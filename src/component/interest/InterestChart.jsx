import React, { useMemo } from 'react';
import styled from 'styled-components';
import useGetStockInfo from '../../hooks/useGetStockInfo';
import useWindowSize from '../../hooks/useWindowSize';
import { GraphBox } from '../stock/index';

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
                    <GraphBox isPC={isPC} code={code} name={name} />
                )}
            </StockInfoWrapper>
        </Wrapper>
    );
}

export default InterestChart;
const StockInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1400px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1400px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
