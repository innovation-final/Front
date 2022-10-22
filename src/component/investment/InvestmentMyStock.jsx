import React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import PaidIcon from '@mui/icons-material/Paid';
import MyPageBage from './MyStocks';
import useStocksAccount from '../../hooks/useStocksAccount';

function InvestmentMyStock() {
    const { data } = useStocksAccount();

    return (
        <Wrapper>
            <IconLayout>
                <PaidIcon />
                <Text>내 주식잔고</Text>
            </IconLayout>
            <StyleTableName>
                <TextLayout>종목</TextLayout>
                <TextLayout>보유가</TextLayout>
                <TextLayout>평가손익</TextLayout>
                <TextLayout>수익률</TextLayout>
                <TextLayout>잔고수량</TextLayout>
            </StyleTableName>
            <CardContent>
                {data &&
                    data.map(stock => (
                        <MyPageBage key={stock.id} stock={stock} />
                    ))}
            </CardContent>
        </Wrapper>
    );
}

export default InvestmentMyStock;

const Wrapper = styled.div`
    padding: 1rem;
    min-height: 240px;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;
const TextLayout = styled.p`
    font-weight: bold;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.textColor};
`;
const StyleTableName = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-around;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${props => props.theme.secondaryColor};
`;
