import React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import MypageEdit from './MypageEdit';
import BankPage from './BankPage';
// import MyInvestment from './MyInvestment';
import InvestmentMyStock from '../investment/InvestmentMyStock';
import MainContainer from '../main/MainContainer';

function MypageMain() {
    return (
        <MainContainer>
            <ProfileLayout>
                <MypageEdit />
            </ProfileLayout>
            <CardsLayout>
                <BankCard>
                    <CardContent>
                        <BankPage />
                    </CardContent>
                </BankCard>
                <Card>
                    <InvestmentMyStock />
                </Card>
            </CardsLayout>
        </MainContainer>
    );
}

export default MypageMain;

const ProfileLayout = styled.div`
    height: 100%;
`;

const Card = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    min-height: 335px;
    border-radius: 15px;
    padding: 16px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const BankCard = styled.div`
    overflow: scroll;
    border: 2px solid ${props => props.theme.borderColor};
    border-bottom: 20px double ${props => props.theme.borderColor};
    margin: 20px;
    height: 343px;
    border-radius: 15px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    object-fit: cover;
`;
