import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function InterestPostList({ post }) {
    const navigate = useNavigate();
    return (
        <CardContent onClick={() => navigate(`/post/${post.id}`)}>
            <InterestTitle>{post.title}</InterestTitle>
            <InterestContent>{post.member.nickname}</InterestContent>
        </CardContent>
    );
}

export default InterestPostList;

const CardContent = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin: 5px;
    height: 61px;
    display: flex;
`;
const InterestTitle = styled.div`
    margin: 10px;
    margin-left: 30px;
    cursor: pointer;
    flex-grow: ${props => props.flexRatio};
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    width: 300%;
    white-space: nowrap;
    align-items: center;
`;

const InterestContent = styled.div`
    flex-grow: 1;
    font-size: 14px;
    letter-spacing: -1px;
    color: #82807c;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
