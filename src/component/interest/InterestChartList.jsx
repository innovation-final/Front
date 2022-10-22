import React from 'react';
import styled from 'styled-components';
import { ChartCandleStick } from '../chart';

function InterestChartList({ code }) {
    console.log(code);
    return (
        <StyleDetailContainer>
            <ChartCandleStick code={code} />
        </StyleDetailContainer>
    );
}

export default GraphBox;

const StyleGraphBox = styled.div`
    background-color: #c78e43;
    margin-top: 40px;
    width: 90%;
    height: 100%;
`;
