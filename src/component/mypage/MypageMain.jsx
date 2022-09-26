import React from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

function MypageMain() {
    return (
        <CardLayout>
            <ProfileLayout>
                <ProfileCard>
                    <ImgCard>
                        <CardMedia src="https://i.pinimg.com/564x/cb/a1/84/cba184151102f7032e8a9fd845f3abdb.jpg" />
                    </ImgCard>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </ProfileCard>
            </ProfileLayout>
            <CardsLayout>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <p>
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica Lizards are a
                            widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are a widespread group of
                            squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica Lizards are
                            a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except
                            Antarctica Lizards are asdfsdfsfsd widespread group
                            of squamate reptiles, with over 6,000 species,
                            ranging across all continents except Antarctica
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card>
                    <p>관련뱃지</p>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
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
`;
const ImgCard = styled.div`
    border-radius: 500px;
`;

const CardMedia = styled.img`
    border-radius: 50%;

    margin: 5% 30% 1% 20%;
    height: 60%;
    width: 60%;
`;

const ProfileLayout = styled.div`
    width: 70%;
    height: 750px;
`;

const ProfileCard = styled.div`
    border: 2px solid skyblue;
    margin: 20px;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Card = styled.div`
    border: 2px solid skyblue;
    margin: 20px;

    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    width: 30%;
    height: 362px;
    object-fit: cover;
`;
