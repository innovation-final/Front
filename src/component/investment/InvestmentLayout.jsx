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
                <StyledightSide>
                    <InvestmentTrade />
                </StyledightSide>
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
    display: flex;
`;

const StyleLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-right: 21px;
`;
const StyledightSide = styled.div`
    width: 25%;
    margin-left: 21px;
`;
