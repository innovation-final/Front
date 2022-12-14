import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StockSearch from '../elements/StockSearch';
import Button from '../elements/Button';
import { searchState } from '../../atoms/search/searchState';
import currentStockCode from '../../atoms/investment/stockState';
import useAccount from '../../hooks/useAccount';
import { esUSNumberParser } from '../../util/parser';
import tutorialState from '../../atoms/tutorial/tutorialState';
import { wideState } from '../../atoms/common/commonState';

function InvestmentHeader() {
    const navigate = useNavigate();
    const client = useQueryClient();
    const stocksQuery = client.getQueryData('stockSearch');
    const myAccount = useAccount();
    const stocksData = stocksQuery?.data?.data;
    const stocksNames = stocksData?.map(stocks => {
        return stocks.name;
    });
    const setCurrentState = useSetRecoilState(currentStockCode);
    const setTutorial = useSetRecoilState(tutorialState);
    const setIsWide = useSetRecoilState(wideState);
    const search = useRecoilValue(searchState);
    const onClick = () => {
        if (!stocksData || !stocksNames.includes(search)) {
            Swal.fire('종목명을 정확히 적어주세요.');
            return;
        }
        const stockCode = stocksData?.find(stock => stock.name === search).code;
        setCurrentState(stockCode);
    };
    const onTutorial = () => {
        setIsWide(false);
        setTutorial(props => !props);
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
                    <TutorialButton onClick={() => onTutorial()}>
                        ?
                    </TutorialButton>
                    <TimeInfo>스톡스톡 장시간 (09:30~21:00)</TimeInfo>
                </SearchBox>
                <MyInfo>
                    {!myAccount.data?.balance ? (
                        <MyInfoContainer>
                            계좌를 만들어 주세요
                            <ArrowRightAltIcon />
                            <AccountButton onClick={() => navigate(`/mypage`)}>
                                계좌 개설하러 가기
                            </AccountButton>
                        </MyInfoContainer>
                    ) : (
                        <>
                            <MyBalance>
                                <Title>보유 현금</Title>
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
        width: 80%;
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
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1400px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        white-space: nowrap;
    }
`;

const MyBalance = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    padding: 12px;
    border-radius: 15px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 10px;
    white-space: nowrap;

    @media screen and (min-width: 1400px) {
        background-color: ${props => props.theme.secondaryColor};
        padding: 12px;
        border-radius: 15px;
        width: 40%;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`;

const Title = styled.div``;
const AccountButton = styled.button`
    background-color: ${props => props.theme.stockBorderColor};
    border: 0;
    border-radius: 200px;
    cursor: pointer;
    font-weight: bold;
    margin: 5px;
    padding: 10px;
    font-size: 12px;
    color: ${props => props.theme.textColor};
    &:hover {
        background-color: ${props => props.theme.buttonColor};
    }
`;
const Money = styled.div`
    padding-right: 40px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1400px) {
        padding-right: 20%;
        font-size: 0.9vw;
        display: flex;
        margin-top: 1px;
        justify-content: center;
        align-items: center;
    }
`;
const Unit = styled.div`
    position: absolute;
    right: 10px;
    bottom: 11.5px;
`;

const TutorialButton = styled.div`
    visibility: hidden;
    @media screen and (min-width: 1400px) {
        visibility: visible;
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-left: 10px;
        background-color: ${props => props.theme.buttonColor};
        cursor: pointer;
    }
`;

const TimeInfo = styled.div`
    margin-left: 10px;
    font-weight: 600;
    font-size: 12px;
`;
