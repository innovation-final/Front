import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '../elements/Button';
import useMutateComment from '../../hooks/useMutateComment';

function CommentInput() {
    const ref = useRef(null);
    const { id } = useParams();
    const [content, setContent] = useState('');
    const onChange = e => {
        setContent(e.target.value);
    };

    const { addMutation } = useMutateComment(id);

    const onClick = () => {
        setContent('');
        ref.current.value = '';
        addMutation.mutate(
            { content },
            {
                onSuccess: () => {
                    setTimeout(() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            left: 100,
                            behavior: 'smooth',
                        });
                    }, 500);
                },
                onError: () => {
                    Swal.fire('서버 오류입니다.');
                },
            },
        );
    };
    return (
        <StyledCommentInput>
            <InputBox>
                <Input
                    ref={ref}
                    onChange={onChange}
                    placeholder="댓글을 입력해 주세요."
                    maxLength={50}
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
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;
    width: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.inputColor};
    &:active,
    &:focus,
    &:hover {
        outline: 2px solid ${props => props.theme.hoverBorderColor};
    }
`;

const InputBox = styled.div`
    width: 78%;
    @media screen and (min-width: 1400px) {
        width: 93%;
    }
`;

const ButtonBox = styled.div``;
