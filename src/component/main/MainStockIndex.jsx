import React, { useRef, useState } from 'react';
import MainContentBox from './MainContentBox';
import { StockIndex } from '../chart';
import Carousel from 'react-material-ui-carousel';
import { useResizeObserver } from '../../hooks/useResizeObserver';

function MainStockIndex() {
    const divRef = useRef(null);
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(divRef, optionalCallback);

    return (
        <MainContentBox ref={divRef} title="코스피/코스닥">
            <Carousel autoPlay={false} swipe={false} animation="slide">
                <StockIndex name="kospi" width={width} height={height} />

                <StockIndex name="kosdaq" width={width} height={height} />
            </Carousel>
        </MainContentBox>
    );
}

export default MainStockIndex;
