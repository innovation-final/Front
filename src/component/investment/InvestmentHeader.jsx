import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useQueryClient } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import StockSearch from '../elements/StockSearch';
import Button from '../elements/Button';
import { searchState } from '../../atoms/search/searchState';
import { currentStockCode } from '../../atoms/investment/stockState';

function InvestmentHeader() {
    const client = useQueryClient();
    const stocksQuery = client.getQueryData('stockSearch');
    const stocksData = stocksQuery?.data.data;
    const setCurrentState = useSetRecoilState(currentStockCode);
    const search = useRecoilValue(searchState);
    const onClick = () => {
        if (!stocksData) return;
        const stockCode = stocksData?.find(stock => stock.name === search).code;
        setCurrentState(stockCode);
    };

    return (
        <StyleHeader>
            <StyleContainer>
                <SearchBox>
                    <StockSearch />
                    <Button _onClick={onClick}>
                        <SearchIcon />
                    </Button>
                </SearchBox>
                <MyInfo>
                    <MyBalance>
                        <Title>내 잔고</Title>
                        <Money>
                            0<Unit>KRW</Unit>
                        </Money>
                    </MyBalance>
                    <MyBalance>
                        <Title>내 수익률</Title>
                        <Money>
                            0<Unit>KRW</Unit>
                        </Money>
                    </MyBalance>
                </MyInfo>
            </StyleContainer>
        </StyleHeader>
    );
}

export default InvestmentHeader;

const StyleHeader = styled.div`
    padding: 0.9rem;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 10px;
    /* border: 1px solid ${props => props.theme.borderColor}; */
`;

const StyleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
`;
const MyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
`;
const MyBalance = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    padding: 12px;
    border-radius: 15px;
    min-width: 230px;
    position: relative;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Title = styled.div``;
const Money = styled.div`
    padding-right: 40px;
`;
const Unit = styled.div`
    position: absolute;
    right: 10px;
    bottom: 11px;
`;
