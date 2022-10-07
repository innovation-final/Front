import React, { useRef, useState } from 'react';
import MainContentBox from './MainContentBox';
import { SampleChart } from '../chart';
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
            <Carousel autoPlay={true} swipe={false} animation="slide">
                <SampleChart
                    name="삼성전자"
                    width={width}
                    height={height}
                    code="005930"
                />
                <SampleChart
                    name="삼성전자우"
                    width={width}
                    height={height}
                    code="005935"
                />
            </Carousel>
        </MainContentBox>
    );
}

export default MainStockIndex;
