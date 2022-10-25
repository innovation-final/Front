import React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import PaidIcon from '@mui/icons-material/Paid';
import MyPageBage from '../investment/MyStocks';

function MyInvestment() {
    return (
        <div>
            <IconLayout>
                <PaidIcon />
                <Text>모의투자 수익률</Text>
            </IconLayout>
            <StyleTableName>
                <TextLayout>종목</TextLayout>
                <TextLayout>현재가</TextLayout>
                <TextLayout>ㅇㅇ</TextLayout>
                <TextLayout>좋아요</TextLayout>
            </StyleTableName>
            <CardContent>
                <MyPageBage />
            </CardContent>
        </div>
    );
}

export default MyInvestment;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
`;
const TextLayout = styled.p`
    font-weight: bold;
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
