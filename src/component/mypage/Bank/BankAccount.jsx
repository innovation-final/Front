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
    padding-left: 20px;
    margin: 20px;
    padding-top: 10%;
    overflow: hidden;
`;
const TextLayout = styled.div`
    padding: 5px;

    display: flex;
`;
const Text = styled.p`
    font-weight: bold;
    font-size: 2vmin;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap;
    margin-left: 20px;
    line-height: 2vmin;
    color: ${props => props.theme.textColor};
    word-break: break-all;
    width: 300px;
    flex-grow: ${props => props.flexRatio};
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Content = styled.p`
    font-weight: bold;
    margin-left: 20px;
    width: 400px;
    font-size: 2vmin;
    line-height: 2vmin;
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    padding: 5px;
`;
