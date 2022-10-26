import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { timeToToday } from '../../util/parser';

function NoticeList({ alarms }) {
    const { message, createdAt, type, postId } = alarms;
    const navigate = useNavigate();

    const navigatePage = (_type, _postId) => {
        if (type === '뱃지취득') {
            navigate('/mypage');
            return;
        }
        if (type === '댓글') {
            navigate(`/post/${_postId}`);
            return;
        }
        if (type === '지정가') {
            navigate('/mypage');
        }
    };

    return (
        <CardContent onClick={() => navigatePage(type, postId)}>
            <NoticeTitle>{message}</NoticeTitle>
            <NoticeContent>{timeToToday(createdAt)}</NoticeContent>
            <NoticeContent />
        </CardContent>
    );
}

export default NoticeList;
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
const NoticeTitle = styled.div`
    margin: 7px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    width: 300%;

    align-items: center;
    padding: 10px;
`;

const NoticeContent = styled.div`
    font-size: 12px;
    color: #82807c;
    display: flex;
    width: 30%;
    white-space: nowrap;
    align-items: center;
`;
