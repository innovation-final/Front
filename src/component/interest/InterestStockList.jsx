import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import FavoritesIcon from '../elements/FavoritesIcon';
import { stockAPI } from '../../shared/api';

function InterestStockList({ interestStocks, _onClick }) {
    const { current, name, doneInterest, code } = interestStocks;

    // 관심종목 등록
    const queryClient = useQueryClient();
    const [like, setLikes] = useState(false);

    // 관심종목 취소
    const deleteLikeStock = _code => {
        const response = stockAPI.deleteLikeStock(_code);
        return response;
    };
    const dislikemutation = useMutation(_code => deleteLikeStock(_code), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const dislikeHandler = e => {
        e.preventDefault();
        setLikes(!like);
        dislikemutation.mutate(code);
    };

    return (
        <CardContent onClick={_onClick}>
            <InterestTitle>{name}</InterestTitle>
            <InterestContent>{current.open}</InterestContent>
            <InterestContent>
                <DeleteLikeBtn done={like} onClick={e => dislikeHandler(e)}>
                    <FavoritesIcon isFavorites={doneInterest} />
                </DeleteLikeBtn>
            </InterestContent>
        </CardContent>
    );
}

export default InterestStockList;

const CardContent = styled.div`
    border: 2px solid ${props => props.theme.stockBorderColor};
    border-radius: 15px;
    margin: 15px;
    display: flex;
    height: 61px;
    cursor: pointer;
    &:hover {
        border: 2px solid ${props => props.theme.hoverBorderColor};
        background-color: ${props => props.theme.hoverColor};
    }
`;
const InterestTitle = styled.div`
    margin: 8px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    width: 200%;
    align-items: center;
    padding: 10px;
`;

const InterestContent = styled.div`
    font-size: 18px;
    color: #82807c;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;

const DeleteLikeBtn = styled.div`
    width: 30px;
`;
