import React from 'react';
import styled from 'styled-components';
import FavoritesIcon from '../elements/FavoritesIcon';

function StockInfoBox() {
    return (
        <StockInfoContainer>
            <StockInfoLeftBox>
                <StockInfoTitleBox>
                    <StyleFavorite>
                        <FavoritesIcon />
                        <StockInfoName>주식이름</StockInfoName>
                    </StyleFavorite>
                    <StockInfoCode>(코드)</StockInfoCode>
                    <StockInfoType>코스피</StockInfoType>
                </StockInfoTitleBox>
                <StockInfoTitleBox>
                    <StockInfoPrice>7,700</StockInfoPrice>
                    <StockInfoRate>전일대비 ▲ 500 | +2.21%</StockInfoRate>
                </StockInfoTitleBox>
            </StockInfoLeftBox>
            <StockInfoRightBox>
                <StockInfoRightTopBox>
                    <StockInfoPrevious>전일 7,200</StockInfoPrevious>
                    <StockInfoHigh>고가 7,300</StockInfoHigh>
                </StockInfoRightTopBox>
                <StockInfoRightBottomBox>
                    <StockInfoMarketPrice>시가 7,250</StockInfoMarketPrice>
                    <StockInfoLow>저가 6,900</StockInfoLow>
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
    width: 100%;
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
const StockInfoPrice = styled.div`
    font-size: 25px;
    margin-right: 20px;
`;
const StockInfoRate = styled.div`
    line-height: 30px;
`;
const StockInfoRightBox = styled.div`
    display: flex;
    flex-direction: column;
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
