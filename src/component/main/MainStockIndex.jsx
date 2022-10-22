import React, { useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import MainContentBox from './MainContentBox';
import { StockIndex } from '../chart';
import useResizeObserver from '../../hooks/useResizeObserver';

function MainStockIndex() {
    const divRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useResizeObserver(divRef, optionalCallback);

    return (
        <MainContentBox ref={divRef} title="코스피/코스닥">
            <Carousel autoPlay swipe={false} animation="slide">
                <StockIndex name="kospi" width={width} height={300} />
                <StockIndex name="kosdaq" width={width} height={300} />
            </Carousel>
        </MainContentBox>
    );
}

export default MainStockIndex;
