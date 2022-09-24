import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

function MypageMain() {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <MediaCard>
                <CardMedia src="https://i.pinimg.com/564x/cb/a1/84/cba184151102f7032e8a9fd845f3abdb.jpg" />
            </MediaCard>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    숭어
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MypageMain;

const MediaCard = styled.div`
    border-radius: 500px;
`;

const CardMedia = styled.img`
    border-radius: 500px;
    max-width: 400px;
    margin-left: 50px;
    object-fit: cover;
`;
