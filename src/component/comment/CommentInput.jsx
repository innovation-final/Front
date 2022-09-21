import React, { useState, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../elements/Button';
import { commentAPI } from '../../shared/api';

function CommentInput() {
    const ref = useRef(null);
    const { id } = useParams();
    const queryClient = useQueryClient();
    const [content, setContent] = useState('');
    const onChange = e => {
        setContent(e.target.value);
    };

    const addComment = async req => {
        const response = await commentAPI.postComment(id, req);
        return response;
    };

    const mutation = useMutation(req => addComment(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });
    const onClick = () => {
        setContent('');
        ref.current.value = '';
        mutation.mutate({ content });
    };
    return (
        <StyledCommentInput>
            <InputBox>
                <Input
                    ref={ref}
                    onChange={onChange}
                    placeholder="댓글을 입력해 주세요."
                />
            </InputBox>
            <ButtonBox onClick={onClick}>
                <Button>댓글쓰기</Button>
            </ButtonBox>
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

const Input = styled.input`
    font-family: 'Pretendard-Regular';
    padding: 10px;
    border: 1px solid #48dbfb;
    border-radius: 10px;
    width: 100%;

    &:active,
    &:focus,
    &:hover {
        outline: 2px solid #0abde3;
    }
`;

const InputBox = styled.div`
    width: 90%;
`;

const ButtonBox = styled.div`
    width: 5%;
`;
