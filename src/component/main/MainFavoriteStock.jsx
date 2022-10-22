import React, { useRef } from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import MainContentBox from './MainContentBox';
import { ChartCandleStick } from '../chart';
import LoadingSpinner from '../elements/LoadingSpinner';

function MainStockIndex({ myStock, isLoading }) {
    const divRef = useRef(null);
    return (
        <React.Suspense>
            <MainContentBox ref={divRef} title="관심종목 차트">
                {myStock && myStock.length === 0 ? (
                    <NoData>관심 종목을 등록해주세요.</NoData>
                ) : null}
                {isLoading ? (
                    <Wrapper>
                        <LoadingSpinner />
                    </Wrapper>
                ) : (
                    <Div>
                        <h1>{myStock && myStock.name}</h1>
                        <Carousel autoPlay swipe={false} animation="slide">
                            {myStock.map(stock => {
                                return (
                                    <ChartCandleStick
                                        key={stock.code}
                                        name={stock.name}
                                        width="100%"
                                        height={300}
                                        code={stock.code}
                                    />
                                );
                            })}
                        </Carousel>
                    </Div>
                )}
            </MainContentBox>
        </React.Suspense>
    );
}

export default MainStockIndex;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled.div`
    padding-top: 60px;
`;

const NoData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.textColor};
`;
