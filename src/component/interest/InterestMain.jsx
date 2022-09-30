import React from 'react';
import styled from 'styled-components';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListIcon from '@mui/icons-material/List';
import InterestNewsList from './InterestNewsCardList';
import InterestStockList from './InterestStockList';

function InterestMain() {
    return (
        <CardLayout>
            <InterestLayout>
                <InterestCard>
                    <IconLayout>
                        <ListIcon />
                        <Text>관심 등록한 주식 리스트</Text>
                    </IconLayout>
                    <InterestStockList />

                    {/* <Button>
                        <EditCogBtn />
                    </Button> */}
                </InterestCard>
            </InterestLayout>
            <CardsLayout>
                <Card>
                    <IconLayout>
                        <BarChartIcon />
                        <Text>관련그래프</Text>
                    </IconLayout>
                </Card>

                <Card>
                    <IconLayout>
                        <NewspaperIcon />
                        <Text>관련기사</Text>
                    </IconLayout>

                    <InterestNewsList />
                </Card>
            </CardsLayout>
        </CardLayout>
    );
}

export default InterestMain;
const CardLayout = styled.div`
    display: flex;
    margin: 30px;
    width: 92%;
    height: 750px;
`;

const InterestLayout = styled.div`
    width: 44%;
    height: 100%;
    height: 750px;
`;

const InterestCard = styled.div`
    position: relative;
    border: 2px solid skyblue;
    margin: 20px;
    border-radius: 15px;
    overflow: scroll;
    height: 750px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Card = styled.div`
    border: 2px solid skyblue;
    margin: 20px;
    height: 363px;
    border-radius: 15px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    width: 56%;
    object-fit: cover;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
// const Button = styled.button`
//     background-color: transparent;
//     border: 0;
//     cursor: pointer;
//     position: absolute;
//     right: 2px;
//     top: 5px;
// `;

// const EditCogBtn = styled.img`
//     width: 22px;
//     border: 0;
// `;
