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

export default InterestChartList;
const StyleDetailContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
`;

// const StockInfoWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 75%;
// `;

// const ContainerTop = styled.div`
//     position: relative;
//     ${props => (props.isPC ? responsive.pc : responsive.phone)};
//     width: 100%;
//     height: 50%;
//     display: flex;
// `;
// const ContainerBottom = styled.div`
//     position: relative;
//     ${props => (props.isPC ? responsive.pc : responsive.phone)};
//     width: 100%;
//     height: 50%;
//     display: flex;
// `;
