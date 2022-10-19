import React from 'react';
import styled from 'styled-components';
import {
    InvestmentMyStock,
    InvestmentHeader,
    InvestmentInfoBox,
    InvestmentTrade,
} from './index';

function InvestmentLayout() {
    return (
        <StyleContainer>
            <InvestmentHeader />
            <StyleWrapper>
                <StyleLeftSide>
                    <InvestmentInfoBox />
                    <InvestmentMyStock />
                </StyleLeftSide>
                <StyledRightSide>
                    <InvestmentTrade />
                </StyledRightSide>
            </StyleWrapper>
        </StyleContainer>
    );
}

export default InvestmentLayout;

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    padding-right: 1.3rem;
`;
const StyleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
`;

const StyleLeftSide = styled.div`
    grid-column: 1/3;
`;
const StyledRightSide = styled.div`
    grid-column: 3/4;
`;
