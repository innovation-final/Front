import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useQueryClient } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import StockSearch from '../elements/StockSearch';
import Button from '../elements/Button';
import { searchState } from '../../atoms/search/searchState';
import currentStockCode from '../../atoms/investment/stockState';
import useAccount from '../../hooks/useAccount';
import { esUSNumberParser } from '../../util/parser';

function InvestmentHeader() {
    const client = useQueryClient();
    const stocksQuery = client.getQueryData('stockSearch');
    const myAccount = useAccount();
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
                    <ButtonBox>
                        <Button _onClick={onClick}>
                            <SearchIcon />
                        </Button>
                    </ButtonBox>
                </SearchBox>
                <MyInfo>
                    {!myAccount.data?.balance ? (
                        <MyInfoContainer>계좌를 만들어 주세요</MyInfoContainer>
                    ) : (
                        <>
                            <MyBalance>
                                <Title>내 잔고</Title>
                                <Money>
                                    {myAccount.data &&
                                        esUSNumberParser(
                                            myAccount.data?.balance,
                                        )}
                                    <Unit>KRW</Unit>
                                </Money>
                            </MyBalance>
                            <MyBalance>
                                <Title>내 수익률</Title>
                                <Money>
                                    {!myAccount.data
                                        ? 0
                                        : (
                                              myAccount.data.totalReturnRate *
                                              100
                                          ).toFixed(3)}
                                    <Unit>%</Unit>
                                </Money>
                            </MyBalance>
                        </>
                    )}
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1400px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    @media screen and (min-width: 1400px) {
        display: flex;
        align-items: center;
        width: 40%;
    }
`;

const ButtonBox = styled.div`
    margin-left: 20px;
`;
const MyInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @media screen and (min-width: 1400px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
    }
`;
const MyInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (min-width: 1400px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
    }
`;

const MyBalance = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    padding: 12px;
    border-radius: 15px;
    width: 40%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 10px;

    @media screen and (min-width: 1400px) {
        background-color: ${props => props.theme.secondaryColor};
        padding: 12px;
        border-radius: 15px;
        width: 30%;
        position: relative;
        display: flex;
        justify-content: space-between;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
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
