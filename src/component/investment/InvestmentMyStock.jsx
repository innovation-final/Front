import React from 'react';
import styled from 'styled-components';

function InvestmentMyStock() {
    return <StyleContainer>InvestmentMyStock</StyleContainer>;
}

export default InvestmentMyStock;

const StyleContainer = styled.div`
    width: 100%;
    padding: 1rem;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    min-height: 10rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
