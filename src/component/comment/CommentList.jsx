import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const data = [
    { author: '준수', body: '안녕하세요', date: Date.now() },
    { author: '개미', body: '출근실헝 ㅠ', date: Date.now() },
];

function CommentList() {
    return (
        <StyledCommentList>
            {data.map(comment => (
                <Comment
                    author={comment.author}
                    body={comment.body}
                    date={comment.date}
                />
            ))}
        </StyledCommentList>
    );
}

export default CommentList;

const StyledCommentList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px auto;
    padding: 10px;
    width: 100%;
`;
