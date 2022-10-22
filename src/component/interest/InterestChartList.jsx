import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { SampleChart } from '../chart';

function GraphBox({ isPC, code }) {
    const divRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(divRef, optionalCallback);
    return (
        <StyleGraphBox isPC={isPC} ref={divRef}>
            <SampleChart name="" code={code} width={width} height={height} />
        </StyleGraphBox>
    );
}

export default GraphBox;

const StyleGraphBox = styled.div`
    background-color: #c78e43;
    margin-top: 40px;
    width: 90%;
    height: 100%;
`;
