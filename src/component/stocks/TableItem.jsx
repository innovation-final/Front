import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import FavoritesIcon from '../elements/FavoritesIcon';
import { esUSNumberParser, millionUnit } from '../../util/parser';
import { stockAPI } from '../../shared/api';

function TableItem({ values }) {
    const {
        rank,
        stockName,
        lastPrice,
        fluctuationRate,
        lowPrice,
        highPrice,
        tradingValue,
        doneInterest,
        volume,
        stockCode,
    } = values;
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    // 관심종목 등록
    const likeStock = _code => {
        const response = stockAPI.postLikeStock(_code);
        return response;
    };
    const likemutation = useMutation(_code => likeStock(_code), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const [like, setLikes] = useState(false);

    const likeHandler = e => {
        e.preventDefault();
        setLikes(!like);
        likemutation.mutate(stockCode);
    };

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
        dislikemutation.mutate(stockCode);
    };

    return (
        <StyleTableItem>
            <ItemList onClick={() => navigate(`/stock/${stockCode}`)}>
                <ItemContent>{rank}</ItemContent>
                <ItemContent>{stockName}</ItemContent>
                <ItemContent>{esUSNumberParser(lastPrice)}</ItemContent>
                <ItemMutateContent
                    isMinus={fluctuationRate < 0}
                >{`${fluctuationRate}%`}</ItemMutateContent>
                <ItemContent>{esUSNumberParser(lowPrice)}</ItemContent>
                <ItemContent>{esUSNumberParser(highPrice)}</ItemContent>
                <ItemContent>
                    {esUSNumberParser(millionUnit(tradingValue))}
                </ItemContent>
                <ItemContent>
                    {esUSNumberParser(millionUnit(volume))}
                </ItemContent>
            </ItemList>
            <Favorites>
                {!doneInterest ? (
                    <LikeBtn done={like} onClick={e => likeHandler(e)}>
                        <FavoritesIcon isFavorites={doneInterest} />
                    </LikeBtn>
                ) : (
                    <DeleteLikeBtn done={like} onClick={e => dislikeHandler(e)}>
                        <FavoritesIcon isFavorites={doneInterest} />
                    </DeleteLikeBtn>
                )}
            </Favorites>
        </StyleTableItem>
    );
}

export default TableItem;

const StyleTableItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding: 10px;
    background-color: ${props => props.theme.bgColor};
    &:hover {
        opacity: 0.7;
        background-color: ${props => props.theme.hoverColor};
    }
`;

const ItemList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
`;
const ItemMutateContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    width: 100%;
    color: ${props => (props.isMinus ? '#2980b9' : '#e74c3c')};
`;

const Favorites = styled.div`
    position: absolute;
    left: 10px;
    cursor: pointer;
`;
const LikeBtn = styled.div`
    width: 30px;
`;
const DeleteLikeBtn = styled.div`
    width: 30px;
`;
