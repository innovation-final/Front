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
                    <StyleMyStock>
                        <InvestmentMyStock />
                    </StyleMyStock>
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
`;
const StyleWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    @media screen and (min-width: 1400px) {
        display: grid;
        position: relative;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, minmax(120px, 100%));
        gap: 20px;
    }
`;

const StyleLeftSide = styled.div`
    margin-bottom: 20px;
    width: auto;
    @media screen and (min-width: 1400px) {
        grid-column: 1/4;
        grid-row: 1/4;
        width: 100%;
    }
`;

const StyleMyStock = styled.div`
    width: 100%;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const StyledRightSide = styled.div`
    @media screen and (min-width: 1400px) {
        grid-column: 4/5;
        grid-row: 1/4;
    }
`;
