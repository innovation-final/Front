import React, { useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import MainContentBox from './MainContentBox';
import { SampleChart } from '../chart';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import LoadingSpinner from '../elements/LoadingSpinner';

function MainStockIndex({ myStock, isLoading }) {
    const divRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useResizeObserver(divRef, optionalCallback);
    return (
        <MainContentBox ref={divRef} title="관심종목 차트">
            {isLoading ? (
                <Wrapper>
                    <LoadingSpinner />
                </Wrapper>
            ) : (
                <Carousel autoPlay swipe={false} animation="slide">
                    {myStock.map(stock => {
                        return (
                            <SampleChart
                                key={stock.code}
                                name={stock.name}
                                width={width}
                                height={400}
                                code={stock.code}
                            />
                        );
                    })}
                </Carousel>
            )}
        </MainContentBox>
    );
}

export default MainStockIndex;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
