import React, { useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import MainContentBox from './MainContentBox';
import { SampleChart } from '../chart';
import { useResizeObserver } from '../../hooks/useResizeObserver';

function MainStockIndex() {
    const divRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(divRef, optionalCallback);
    return (
        <MainContentBox ref={divRef} title="코스피/코스닥">
            <Carousel autoPlay swipe={false} animation="slide">
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
