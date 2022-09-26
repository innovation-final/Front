import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';

function FinancialStatementBox({ isPC }) {
    return (
        <StyleFinancialStatementBox isPC={isPC}>
            <Title>재무재표</Title>
            <ContentBox>
                <div>재무재표 상위 다섯개</div>
            </ContentBox>
        </StyleFinancialStatementBox>
    );
}

export default FinancialStatementBox;

const StyleFinancialStatementBox = styled.div`
    width: ${props => (props.isPC ? '32' : '100')}%;
`;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;
