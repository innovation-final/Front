import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import FavoritesIcon from '../elements/FavoritesIcon';
import {
    esUSNumberParser,
    toFixTwoPoint,
    arrowParser,
} from '../../util/parser';
import { isDarkState } from '../../atoms/atoms';

function StockInfoBox({ stockData }) {
    const {
        code,
        name,
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
    const dayToDay = close - prevPrice.close;

    const colorParser = value => {
        if (value === 0) return isDark ? 'white' : 'black';
        if (value < 0) return '#2980b9';
        if (value > 0) return '#e74c3c';
        return 'black';
    };

    return (
        <StockInfoContainer>
            <StockInfoLeftBox>
                <StockInfoTitleBox>
                    <StyleFavorite>
                        <FavoritesIcon />
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
                        전일 {esUSNumberParser(prevPrice.close)}
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
    width: 90%;
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
    font-size: 30px;
    font-weight: 700;
    margin-right: 10px;
`;
const StockInfoCode = styled.div`
    line-height: 30px;
    margin-right: 10px;
`;
const StockInfoType = styled.div`
    line-height: 30px;
    margin-right: 10px;
`;
const StockDate = styled.div`
    line-height: 30px;
    margin-right: 10px;
    font-size: 13px;
    color: gray;
`;
const StockInfoPrice = styled.div`
    font-size: 25px;
    margin-right: 20px;
`;
const StockInfoRate = styled.div`
    line-height: 30px;
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
