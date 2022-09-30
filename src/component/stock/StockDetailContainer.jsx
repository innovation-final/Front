import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import LoadingSpinner from '../elements/LoadingSpinner';
import {
    GraphBox,
    TradingVolumeBox,
    FinancialStatementBox,
    RelatedArticlesBox,
    RelatedPostsBox,
    StockInfoBox,
} from './index';
import { stockAPI } from '../../shared/api';

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

    const { id } = useParams();
    const stockCode = id;

    const { data, isLoading } = useQuery(
        ['stock', stockCode],
        () => stockAPI.getStockDetail(stockCode),
        { refetchOnWindowFocus: false },
    );
    if (isLoading) return <LoadingSpinner />;

    const [code, name, isKospi] = data.data.data;
    const presentPrice = data.data.data.at(-1);
    const prevPrice = data.data.data.at(-2);
    const stockData = { code, name, isKospi, ...presentPrice, prevPrice };

    return (
        <StyleDetailContainer>
            <ContainerTop isPC={isPC}>
                <StockInfoWrapper>
                    <StockInfoBox stockData={stockData} isPC={isPC} />
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
