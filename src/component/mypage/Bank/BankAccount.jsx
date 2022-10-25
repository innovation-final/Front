import React from 'react';
import styled from 'styled-components';
import useAccount from '../../../hooks/useAccount';
import BankSpinner from './BankSpinner';

function BankAccount() {
    const { data } = useAccount();

    if (!data) return <BankSpinner />;

    const accountNumber =
        data &&
        data.accountNumber
            .toString()
            .replace(/(\d)(?=(?:\d{5})+(?!\d))/g, '$1-');

    const createdAt = data && data.createdAt.substr(0, 10);
    const expireAt = data && data.expireAt.substr(0, 10);
    const seedMoney = data && data.seedMoney.toLocaleString();
    const balance = data && data.balance.toLocaleString();
    const targetReturnRate = data && data.targetReturnRate;
    const totalReturnRate = data && data.totalReturnRate;
    const totalProfit = data && data.totalProfit.toLocaleString();
    const totalRealizedProfit =
        data && data.totalRealizedProfit.toLocaleString();

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
                <Content>{seedMoney}원</Content>
            </TextLayout>
            <TextLayout>
                <Text>현재머니</Text>
                <Content>{balance}원</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    목표 수익률
                </Text>
                <Content>{(targetReturnRate * 100).toFixed()}%</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    현재 수익률
                </Text>
                <StockContent isMinus={totalReturnRate < 0}>
                    {(totalReturnRate * 100).toFixed(3)}%
                </StockContent>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    평가손익
                </Text>
                <StockContent isMinus={totalProfit < 0}>
                    {totalProfit}원
                </StockContent>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    실현손익
                </Text>
                <StockContent isMinus={totalRealizedProfit < 0}>
                    {totalRealizedProfit}원
                </StockContent>
            </TextLayout>
        </ContentLayout>
    );
}

export default BankAccount;

const ContentLayout = styled.div`
    padding-left: 20px;
    margin: 20px;
    padding-top: 2%;
    overflow: hidden;
`;
const TextLayout = styled.div`
    padding: 2px;
    display: flex;
`;
const Text = styled.p`
    font-weight: bold;
    font-size: 1.5vmin;
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
    font-size: 1.5vmin;
    line-height: 2vmin;
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    padding: 5px;
`;
const StockContent = styled.p`
    font-weight: bold;
    margin-left: 20px;
    width: 400px;
    font-size: 1.5vmin;
    line-height: 2vmin;
    display: flex;
    flex-direction: row;
    padding: 5px;
    color: ${props => (props.isMinus ? '#2980b9' : '#e74c3c')};
`;
