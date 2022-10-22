import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import FavoritesIcon from '../elements/FavoritesIcon';
import {
    esUSNumberParser,
    toFixTwoPoint,
    arrowParser,
} from '../../util/parser';
import { isDarkState } from '../../atoms/common/commonState';
import { stockAPI } from '../../shared/api';

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

    const isDark = useRecoilValue(isDarkState);
    const dayToDay = close && close - prevPrice.close;

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
            <StockInfoLeftBox>
                <StockInfoTitleBox>
                    <StyleFavorite>
                        {!doneInterest ? (
                            <LikeBtn done={like} onClick={e => likeHandler(e)}>
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

                        <StockInfoName>{name}</StockInfoName>
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
                        ${toFixTwoPoint(change)}%`}
                    </StockInfoRate>
                </StockInfoTitleBox>
            </StockInfoLeftBox>
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
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
`;
const StockInfoLeftBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const StockInfoTitleBox = styled.div`
    display: flex;
    margin-bottom: 5px;
`;
const StyleFavorite = styled.div`
    display: flex;
`;
const StockInfoName = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.7vw;
    font-weight: 700;
    margin-right: 10px;
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
