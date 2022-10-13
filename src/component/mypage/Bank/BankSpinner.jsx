import React from 'react';
import styled from 'styled-components';

function BankSpinner() {
    return (
        <Card>
            <Text gutterBottom variant="h5" component="div">
                모의투자 계좌가 없습니다.
            </Text>
        </Card>
    );
}

export default BankSpinner;
const Text = styled.p`
    font-weight: bold;
    text-align: center;
    padding-top: 120px;
`;

const Card = styled.div`
    width: 100%;
`;
