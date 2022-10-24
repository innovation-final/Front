import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListIcon from '@mui/icons-material/List';
import InterestStockList from './InterestStockList';
import { stockAPI } from '../../shared/api';
import InterestNewsList from './InterestNews';
import InterestPost from './InterestPost';

function InterestMain() {
    const [param, setParam] = useState('');
    const { data } = useQuery(['stock'], () => stockAPI.getLikeStock());

    const interestStock = data?.data.data;
    const onClick = code => {
        setParam(code);
    };
    // eslint-disable-next-line no-unused-vars
    const [nowColorNum, setNowColorNum] = useState();
    const colorChange = index => {
        setNowColorNum(index);
    };

    return (
        <CardLayout>
            <InterestLayout>
                <InterestCard>
                    <IconLayout>
                        <ListIcon />
                        <Text>관심 등록한 주식 리스트</Text>
                    </IconLayout>
                    {interestStock &&
                        interestStock.map((interestStocks, index) => {
                            return index === nowColorNum ? (
                                <InterestStockList
                                    key={interestStocks.name}
                                    _onClick={() =>
                                        onClick(interestStocks.code)
                                    }
                                    interestStocks={interestStocks}
                                    className="checked"
                                    indexNum={index}
                                    nowColorNum={nowColorNum}
                                    colorChange={colorChange}
                                />
                            ) : (
                                <InterestStockList
                                    key={interestStocks.name}
                                    _onClick={() =>
                                        onClick(interestStocks.code)
                                    }
                                    interestStocks={interestStocks}
                                    indexNum={index}
                                    nowColorNum={nowColorNum}
                                    colorChange={colorChange}
                                />
                            );
                        })}
                    {/* <Button>
                        <EditCogBtn />
                    </Button> */}
                </InterestCard>
            </InterestLayout>
            <CardsLayout>
                <Card>
                    <IconLayout>
                        <MenuBookIcon />
                        <Text>관련게시글</Text>
                    </IconLayout>
                    <InterestPost code={param} />
                </Card>

                <NewsCard>
                    <IconLayout>
                        <NewspaperIcon />
                        <Text>관련기사</Text>
                    </IconLayout>
                    <InterestNewsList code={param} />
                </NewsCard>
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
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    border-radius: 15px;
    overflow: scroll;
    height: 750px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Card = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    height: 363px;
    border-radius: 15px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const NewsCard = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    height: 363px;
    overflow: hidden;
    border-radius: 15px;
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
