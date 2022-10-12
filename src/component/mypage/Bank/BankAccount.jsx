import React from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import styled from 'styled-components';
import useAccount from '../../../hooks/useAccount';

function BankAccount() {
    const { data } = useAccount();
    console.log(data);

    const accountNumber = data && data.accountNumber;
    const createdAt = data && data.createdAt;
    const deposit = data && data.deposit;
    const targetReturnRate = data && data.targetReturnRate;
    console.log(accountNumber, createdAt, deposit, targetReturnRate);

    return (
        <>
            <IconLayout>
                <SavingsIcon />
                <Text>모의투자 계좌</Text>
            </IconLayout>
            <CardContent>
                {' '}
                <Text gutterBottom variant="h5" component="div">
                    계좌:{accountNumber}
                </Text>
                <Text gutterBottom variant="h5" component="div">
                    시드머니:{deposit}
                </Text>
                <Text gutterBottom variant="h5" component="div">
                    목표 수익률:{targetReturnRate}%
                </Text>
            </CardContent>
        </>
    );
}

export default BankAccount;
const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
const CardContent = styled.div`
    align-items: center;
    margin: 70px;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
