import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../elements/Button';
import { timeToToday } from '../../util/parser';
import { userState } from '../../atoms/user/userState';
import useMutateComment from '../../hooks/useMutateComment';

const commentAnimation = {
    start: { opacity: 0, y: 10 },
    end: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -300, transition: { duration: 1 } },
};

function Comment(props) {
    const ref = useRef(null);
    const { id, member, content, date } = props;

    const [editComment, setEditComment] = React.useState(content);
    const [isEdit, setIsEdit] = React.useState(false);

    const user = useRecoilValue(userState);

    const { deleteMutation, editMutation } = useMutateComment(id);

    const onDelete = () => {
        deleteMutation.mutate(id, {
            onError: () => {
                Swal.fire('서버 오류입니다.');
            },
        });
    };
    const onClickEdit = () => {
        editMutation.mutate(
            { content: editComment },
            {
                onError: () => {
                    Swal.fire('서버 오류입니다.');
                },
            },
        );
        setIsEdit(false);
    };
    const onCancel = () => {
        setIsEdit(false);
        setEditComment(content);
    };

    const onChange = event => {
        setEditComment(event.target.value);
    };

    return (
        <WrapperContainer
            variants={commentAnimation}
            initial="start"
            animate="end"
            exit="exit"
        >
            <WriterBox>
                <WrapperUserInfo>
                    <ProfileImage src={member.profileImg} />
                    <Writer>{member.nickname}</Writer>
                    <DateBox>{timeToToday(date)}</DateBox>
                </WrapperUserInfo>
                {member.id === user.id && (
                    <Buttons>
                        <Button
                            size="sm"
                            variant="transparent"
                            disabled={false}
                            name="commentButton"
                        >
                            {!isEdit ? (
                                <EditIcon
                                    fontSize="small"
                                    onClick={() => setIsEdit(true)}
                                />
                            ) : (
                                <CancelIcon
                                    fontSize="small"
                                    onClick={onCancel}
                                />
                            )}
                        </Button>
                        {!isEdit ? (
                            <ButtonBox onClick={onDelete}>
                                <Button
                                    variant="transparent"
                                    disabled={false}
                                    name="commentButton"
                                >
                                    <DeleteOutlineIcon fontSize="small" />
                                </Button>
                            </ButtonBox>
                        ) : (
                            <ButtonBox onClick={onClickEdit}>
                                <Button
                                    variant="transparent"
                                    disabled={false}
                                    name="commentButton"
                                >
                                    <SaveIcon fontSize="small" />
                                </Button>
                            </ButtonBox>
                        )}
                    </Buttons>
                )}
            </WriterBox>
            <StyleComment>
                <Wrapper>
                    {!isEdit ? (
                        <Contents>
                            {content.length >= 80
                                ? `${content.slice(0, 85)}...`
                                : content}
                        </Contents>
                    ) : (
                        <InputBox>
                            <Input
                                ref={ref}
                                onChange={onChange}
                                placeholder="내용을 입력해주세요."
                                value={editComment}
                            />
                        </InputBox>
                    )}
                </Wrapper>
                {/* <Tail /> */}
            </StyleComment>
        </WrapperContainer>
    );
}

export default Comment;

Comment.propTypes = {
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const WrapperUserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;
const WrapperContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;

    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 10px;
`;
const WriterBox = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;
const Writer = styled.div`
    font-size: 15px;
    margin-left: 7px;
`;
const StyleComment = styled.div`
    position: relative;
    width: 95%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
    color: ${props => props.theme.textColor};
`;
const Wrapper = styled.div`
    width: 90%;
    margin-left: 10px;
    font-size: 14px;
`;
const Contents = styled.div``;
const InputBox = styled.div`
    width: 95%;
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
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
`;

const ButtonBox = styled.div``;

const DateBox = styled.div`
    width: 40%;
    margin-left: 10px;
    font-size: calc(0.2em + 0.5vw);
    text-align: left;
`;

const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
    box-shadow: 1px 1px 1px 1px gray;
`;
