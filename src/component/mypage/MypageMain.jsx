import React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import MypageEdit from './MypageEdit';
import BankPage from './BankPage';
// import MyInvestment from './MyInvestment';
import InvestmentMyStock from '../investment/InvestmentMyStock';

function MypageMain() {
    return (
        <CardLayout>
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
        </CardLayout>
    );
}

export default MypageMain;
const CardLayout = styled.div`
    display: flex;
    margin: 30px;
    width: 92%;
    height: 100%;
`;
const ProfileLayout = styled.div`
    width: 50%;
    height: 100%;
    height: 750px;
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
    border: 2px solid ${props => props.theme.borderColor};
    border-bottom: 20px double ${props => props.theme.borderColor};

    margin: 20px;
    height: 343px;
    border-radius: 15px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    width: 50%;
    object-fit: cover;
`;
