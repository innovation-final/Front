import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function FavoritesIcon({ isFavorites }) {
    return (
        <>
            <span />
            {isFavorites ? (
                <Favorite>
                    <StarIcon />
                </Favorite>
            ) : (
                <NotFavorite>
                    <StarBorderIcon />
                </NotFavorite>
            )}
        </>
    );
}

export default FavoritesIcon;
const Favorite = styled.div`
    margin-right: 10px;
    color: orange;
`;
const NotFavorite = styled.div`
    margin-right: 10px;
    color: gray;
`;
