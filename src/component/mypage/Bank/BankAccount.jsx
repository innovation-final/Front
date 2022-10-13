import React from 'react';
import styled from 'styled-components';
import useAccount from '../../../hooks/useAccount';
import BankSpinner from './BankSpinner';

function BankAccount() {
    const { data } = useAccount();
    console.log(data);
    if (!data) return <BankSpinner />;

    const accountNumber =
        data &&
        data.accountNumber
            .toString()
            .replace(/(\d)(?=(?:\d{5})+(?!\d))/g, '$1-');

    console.log(accountNumber);
    const createdAt = data && data.createdAt.substr(0, 10);
    const expireAt = data && data.expireAt.substr(0, 10);
    const seedMoney = data && data.seedMoney.toLocaleString();
    const targetReturnRate = data && data.targetReturnRate;
    console.log(
        accountNumber,
        createdAt,
        seedMoney,
        targetReturnRate,
        expireAt,
    );

    return (
        <ContentLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    계좌
                </Text>
                <Content> {accountNumber}</Content>
            </TextLayout>{' '}
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    계좌 만기일
                </Text>
                <Content>
                    {createdAt} ~ {expireAt}
                </Content>
            </TextLayout>
            <TextLayout>
                <Text>시드머니</Text>
                <Content>{seedMoney}</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    목표 수익률
                </Text>
                <Content>{targetReturnRate}%</Content>
            </TextLayout>
        </ContentLayout>
    );
}

export default BankAccount;

const ContentLayout = styled.div`
    padding: 10px;
    margin: 15px;
    overflow: hidden;
`;
const TextLayout = styled.div`
    padding: 5px;
    display: flex;
`;
const Text = styled.p`
    font-weight: bold;

    color: ${props => props.theme.textColor};

    flex-grow: ${props => props.flexRatio};

    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    width: 70%;
    margin-left: 70px;
    white-space: nowrap;
    align-items: center;
`;
const Content = styled.p`
    font-weight: bold;
    margin: 10px;
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    width: 120%;
    padding: 5px;
`;
