import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import Input from '../elements/Input';

const commentAnimation = {
    start: { opacity: 0, y: 10 },
    end: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -300, transition: { duration: 1 } },
};

function Comment(props) {
    const { author, body, date } = props;
    const [editComment, setEditComment] = React.useState(body);
    const [isEdit, setIsEdit] = React.useState(false);

    const onChange = event => {
        setEditComment(event.target.value);
    };

    const dateData = new Date(date);
    const year = dateData.getFullYear();
    const month = `${dateData.getMonth() + 1}`.padStart(2, 0);
    const day = `${dateData.getDate()}`.padStart(2, 0);
    const hours = `${dateData.getHours()}`.padStart(2, 0);
    const minutes = `${dateData.getMinutes()}`.padStart(2, 0);
    const seconds = `${dateData.getSeconds()}`.padStart(2, 0);
    return (
        <WrapperContainer
            variants={commentAnimation}
            initial="start"
            animate="end"
            exit="exit"
        >
            <WriterBox>
                <WrapperUserInfo>
                    <AccountCircleIcon />
                    <Writer>{author}</Writer>
                    <DateBox>{`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</DateBox>
                </WrapperUserInfo>
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
                                onClick={() => setIsEdit(false)}
                            />
                        )}
                    </Button>
                    {!isEdit ? (
                        <Button
                            variant="transparent"
                            disabled={false}
                            name="commentButton"
                        >
                            <DeleteOutlineIcon fontSize="small" />
                        </Button>
                    ) : (
                        <Button
                            variant="transparent"
                            disabled={false}
                            name="commentButton"
                        >
                            <SaveIcon fontSize="small" />
                        </Button>
                    )}
                </Buttons>
            </WriterBox>
            <StyleComment>
                <Wrapper>
                    {!isEdit ? (
                        <Contents>
                            {body.length >= 80
                                ? `${body.slice(0, 85)}...`
                                : body}
                        </Contents>
                    ) : (
                        <InputBox>
                            <Input
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
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
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

    border-bottom: 1px solid #bdc3c7;
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
    color: black;
`;
// const Tail = styled.div`
//     position: absolute;
//     left: 0;
//     top: 70%;
//     width: 0;
//     height: 0;
//     border: 20px solid transparent;
//     border-right-color: #3399ff;
//     border-left: 0;
//     border-bottom: 0;
//     margin-top: -10px;
//     margin-left: -20px;
// `;
const Wrapper = styled.div`
    width: 90%;
    margin-left: 10px;
    font-size: 14px;
`;
const Contents = styled.div``;
const InputBox = styled.div`
    width: 95%;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
`;

const DateBox = styled.div`
    width: 40%;
    margin-left: 10px;
    font-size: calc(0.2em + 0.5vw);
    text-align: left;
`;
