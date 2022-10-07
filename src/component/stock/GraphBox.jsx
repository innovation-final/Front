import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { SampleChart } from '../chart';
import ContentBox from '../elements/ContentBox';

function GraphBox({ isPC, code, name }) {
    const divRef = useRef(null);
    const [dimensions, setDimensions] = useState({ top: 0, left: 0 });
    const optionalCallback = entry =>
        setDimensions({ top: entry.x, left: entry.left });
    const [width, height] = useResizeObserver(divRef, optionalCallback);
    return (
        <StyleGraphBox isPC={isPC} ref={divRef}>
            <ContentBox>
                <SampleChart
                    name={name}
                    code={code}
                    width={width}
                    height={height}
                />
            </ContentBox>
        </StyleGraphBox>
    );
}

export default GraphBox;

const StyleGraphBox = styled.div`
    width: ${props => (props.isPC ? '75' : '100')}%;
`;
