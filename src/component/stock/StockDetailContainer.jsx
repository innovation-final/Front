import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import GraphBox from './GraphBox';
import TradingVolumeBox from './TradingVolumeBox';
import FinancialStatementBox from './FinancialStatementBox';
import RelatedArticlesBox from './RelatedArticlesBox';
import RelatedPostsBox from './RelatedPostsBox';
import StockInfoBox from './StockInfoBox';

const responsive = {
    pc: css`
        flex-direction: row;
        justify-content: space-between;
    `,
    phone: css`
        flex-direction: column;
    `,
};

function StockDetailContainer() {
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);
    return (
        <StyleDetailContainer>
            <ContainerTop isPC={isPC}>
                <StockInfoWrapper>
                    <StockInfoBox isPC={isPC} />
                    <GraphBox isPC={isPC} />
                </StockInfoWrapper>
                <TradingVolumeBox isPC={isPC} />
            </ContainerTop>
            <ContainerBottom isPC={isPC}>
                <FinancialStatementBox isPC={isPC} />
                <RelatedArticlesBox isPC={isPC} />
                <RelatedPostsBox isPC={isPC} />
            </ContainerBottom>
        </StyleDetailContainer>
    );
}

export default StockDetailContainer;

const StyleDetailContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
`;

const StockInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

const ContainerTop = styled.div`
    position: relative;
    ${props => (props.isPC ? responsive.pc : responsive.phone)};
    width: 100%;
    height: 50%;
    display: flex;
`;
const ContainerBottom = styled.div`
    position: relative;
    ${props => (props.isPC ? responsive.pc : responsive.phone)};
    width: 100%;
    height: 50%;
    display: flex;
`;
