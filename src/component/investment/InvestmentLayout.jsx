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

const StyleMyStock = styled.div`
    width: 100%;
    padding: 1rem;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    height: 15rem;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

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
const StyledRightSide = styled.div`
    width: 25%;
    margin-left: 21px;
`;
