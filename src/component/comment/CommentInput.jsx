import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import Button from '../elements/Button';

function CommentInput() {
    return (
        <StyledCommentInput>
            <InputBox>
                <Input placeholder="댓글을 입력해 주세요." />
            </InputBox>
            <Button>댓글쓰기</Button>
        </StyledCommentInput>
    );
}

export default CommentInput;

const StyledCommentInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const InputBox = styled.div`
    width: 90%;
`;
