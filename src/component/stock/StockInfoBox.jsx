import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import FavoritesIcon from '../elements/FavoritesIcon';
import {
    esUSNumberParser,
    toFixTwoPoint,
    arrowParser,
} from '../../util/parser';
import { isDarkState } from '../../atoms/common/commonState';
import { stockAPI } from '../../shared/api';
import currentStockCode from '../../atoms/investment/stockState';

function StockInfoBox({ stockData }) {
    const {
        code,
        name,
        doneInterest,
        date,
        isKospi,
        open,
        high,
        low,
        close,
        change,
        prevPrice,
    } = stockData;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isDark = useRecoilValue(isDarkState);
    const setCurrentCode = useSetRecoilState(currentStockCode);
    const dayToDay = close && close - prevPrice.close;

    const onClickInvestment = () => {
        setCurrentCode(code);
        navigate('/investment');
    };

    const colorParser = value => {
        if (value === 0) return isDark === 'darkMode' ? 'white' : 'black';
        if (value < 0) return '#2980b9';
        if (value > 0) return '#e74c3c';
        return 'black';
    };
    const queryClient = useQueryClient();
    // 관심종목 등록
    const likeStock = _code => {
        const response = stockAPI.postLikeStock(_code);
        return response;
    };
    const likemutation = useMutation(_code => likeStock(_code), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const [like, setLikes] = useState(false);

    const likeHandler = e => {
        e.preventDefault();
        setLikes(!like);
        likemutation.mutate(code);
    };

    // 관심종목 취소
    const deleteLikeStock = _code => {
        const response = stockAPI.deleteLikeStock(_code);
        return response;
    };
    const dislikemutation = useMutation(_code => deleteLikeStock(_code), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const dislikeHandler = e => {
        e.preventDefault();
        setLikes(!like);
        dislikemutation.mutate(code);
    };

    return (
        <StockInfoContainer>
            <LeftContainer>
                <StockInfoLeftBox>
                    <StockInfoTitleBox>
                        <StyleFavorite>
                            {!doneInterest ? (
                                <LikeBtn
                                    done={like}
                                    onClick={e => likeHandler(e)}
                                >
                                    <FavoritesIcon isFavorites={doneInterest} />
                                </LikeBtn>
                            ) : (
                                <DeleteLikeBtn
                                    done={like}
                                    onClick={e => dislikeHandler(e)}
                                >
                                    <FavoritesIcon isFavorites={doneInterest} />
                                </DeleteLikeBtn>
                            )}

                            <StockInfoName
                                onClick={() => navigate(`/stock/${code}`)}
                            >
                                {name}
                            </StockInfoName>
                        </StyleFavorite>
                        <StockInfoCode>{`E${code}`}</StockInfoCode>
                        <StockInfoType>{isKospi}</StockInfoType>
                        <StockDate>{date}</StockDate>
                    </StockInfoTitleBox>
                    <StockInfoTitleBox>
                        <StockInfoPrice>{`${esUSNumberParser(
                            close,
                        )} KRW`}</StockInfoPrice>
                        <StockInfoRate colorParser={colorParser(dayToDay)}>
                            {`전일대비 ${arrowParser(dayToDay)}
                          ${esUSNumberParser(dayToDay)} |
                        등락률 ${toFixTwoPoint(change)}%`}
                        </StockInfoRate>
                    </StockInfoTitleBox>
                </StockInfoLeftBox>
                <InvestmentButton
                    onClick={onClickInvestment}
                    $locate={pathname === '/investment'}
                >
                    모의투자 바로가기
                </InvestmentButton>
            </LeftContainer>
            <StockInfoRightBox>
                <StockInfoRightTopBox>
                    <StockInfoPrevious>
                        전일 {esUSNumberParser(prevPrice && prevPrice.close)}
                    </StockInfoPrevious>
                    <StockInfoHigh>고가 {esUSNumberParser(high)}</StockInfoHigh>
                </StockInfoRightTopBox>
                <StockInfoRightBottomBox>
                    <StockInfoMarketPrice>
                        시가 {esUSNumberParser(open)}
                    </StockInfoMarketPrice>
                    <StockInfoLow>저가 {esUSNumberParser(low)}</StockInfoLow>
                </StockInfoRightBottomBox>
            </StockInfoRightBox>
        </StockInfoContainer>
    );
}

export default StockInfoBox;
const StockInfoContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
`;
const StockInfoLeftBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const StockInfoTitleBox = styled.div`
    display: flex;
    margin-bottom: 5px;
`;
const StyleFavorite = styled.div`
    display: flex;
`;
const StockInfoName = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 2.3rem;
    font-weight: 700;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const StockInfoCode = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;
const StockInfoType = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;
const StockDate = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 1vw;
    color: gray;
`;
const StockInfoPrice = styled.div`
    font-size: 1.3vw;
    margin-right: 20px;
`;
const StockInfoRate = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.colorParser};
`;
const StockInfoRightBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;
const StockInfoRightTopBox = styled.div`
    display: flex;
    margin-right: 30px;
`;
const StockInfoPrevious = styled.div`
    margin-right: 10px;
`;
const StockInfoHigh = styled.div``;
const StockInfoRightBottomBox = styled.div`
    display: flex;
`;
const StockInfoMarketPrice = styled.div`
    margin-right: 10px;
`;
const StockInfoLow = styled.div``;
const LikeBtn = styled.div`
    width: 30px;
`;
const DeleteLikeBtn = styled.div`
    width: 30px;
`;
const InvestmentButton = styled.div`
    display: none;

    @media screen and (min-width: 1050px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 5px;
        border-radius: 15px;
        font-size: 13px;
        letter-spacing: -1px;
        visibility: ${props => (props.$locate ? 'hidden' : 'visible')};
        background-color: ${props => props.theme.secondaryColor};
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.hoverSecondaryColor};
        }
    }
`;
