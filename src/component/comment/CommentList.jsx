import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment';

function CommentList({ comments }) {
    if (!comments.length)
        return <NoComments>댓글이 없습니다 .댓글을 작성해주세요</NoComments>;

    return (
        <StyledCommentList>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    member={comment.member}
                    content={comment.content}
                    date={comment.modifiedAt}
                />
            ))}
        </StyledCommentList>
    );
}

export default CommentList;

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
            content: PropTypes.string,
        }),
    ),
};

const NoComments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;

const StyledCommentList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    padding: 10px;
    width: 100%;
`;
