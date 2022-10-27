import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { chatLogState } from '../../atoms/chat/chatState';

function ChatScreen({ publish, user }) {
    const chatList = useRecoilValue(chatLogState);
    const { id, isLogin } = user;
    const [chat, setChat] = useState('');
    const handleChange = event => {
        setChat(event.target.value);
    };

    const handleSubmit = (event, ch) => {
        // 보내기 버튼 눌렀을 때 publish
        event.preventDefault();
        if (ch === '') return;
        publish(ch, 'TALK');
        setChat('');
    };

    if (!isLogin) {
        return (
            <StyleChatScreen>
                <NeedToLogin>로그인을 해주세요</NeedToLogin>
            </StyleChatScreen>
        );
    }
    return (
        <StyleChatScreen>
            <Container>
                <MessageBox id="chatting">
                    {chatList.map(ch =>
                        ch.type === 'TALK' ? (
                            <Wrapper
                                key={`${uuid()} ${Date.now()}`}
                                $isMine={ch.userId === id}
                            >
                                <UserInfo>
                                    <ProfileImg
                                        src={`${ch.imageUrl}`}
                                        isMine={ch.userId === id}
                                    />
                                    <UserName
                                        isMine={ch.userId === id}
                                    >{`${ch.nickName}`}</UserName>
                                </UserInfo>
                                <MessageContainer
                                    isMine={ch.userId === id}
                                >{`${ch.message}`}</MessageContainer>
                            </Wrapper>
                        ) : ch.type === 'ENTER' ? (
                            <EnterMessage
                                key={`${uuid()} ${Date.now()}`}
                            >{`${ch.message}`}</EnterMessage>
                        ) : null,
                    )}
                </MessageBox>
                <Form onSubmit={event => handleSubmit(event, chat)}>
                    <InputBox>
                        <Input
                            type="text"
                            name="chatInput"
                            onChange={handleChange}
                            value={chat}
                        />
                    </InputBox>
                    <ButtonBox>
                        <button type="submit">
                            <SendIcon />
                        </button>
                    </ButtonBox>
                </Form>
            </Container>
        </StyleChatScreen>
    );
}

export default ChatScreen;

const StyleChatScreen = styled.div`
    position: relative;
    width: 280px;
    height: 500px;
    border-radius: 15px;
    background-color: #d1e8ed;
    z-index: 1;
    @media screen and (min-width: 1400px) and (min-height: 720px) {
        position: relative;
        width: 380px;
        height: 600px;
        border-radius: 15px;
        background-color: #d1e8ed;
        z-index: 1;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1400px) and (min-height: 720px) {
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 400px;
    padding: 20px;
    overflow: scroll;

    @media screen and (min-width: 1400px) and (min-height: 720px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 490px;
        padding: 20px;
        overflow: scroll;
    }
`;

const Form = styled.form`
    width: 100%;
    margin-right: 7px;
    position: relative;
    margin-top: -110px;

    @media screen and (min-width: 1400px) and (min-height: 720px) {
        width: 100%;
        margin-right: -7px;
        position: relative;
        margin-top: -10px;
    }
`;

const InputBox = styled.div`
    width: 90%;
    padding: 10px;
    background-color: transparent;
`;

const Input = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 15px;
    padding: 7px;
    border: 1px solid skyblue;
    &:focus {
        outline: 2px solid #0abde3;
    }
`;

const ButtonBox = styled.div`
    position: absolute;
    right: 25px;
    bottom: 15px;

    button {
        box-shadow: 1px 1px 1px 1px gray;
        border: none;
        background-color: skyblue;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 12px;
        color: white;
    }
`;

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.$isMine ? 'flex-end' : 'baseline')};
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    min-height: 10px;
`;
const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 1px 1px 1px gray;
    margin-right: 10px;
    display: ${props => (props.isMine ? 'none' : 'block')};
`;
const UserName = styled.div`
    color: black;
    font-size: 14px;
    display: ${props => (props.isMine ? 'none' : 'block')};
`;

const MessageContainer = styled.div`
    color: black;
    background-color: ${props => (props.isMine ? 'orange' : 'skyblue')};
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 3px 10px;
    min-height: 30px;
    line-height: 30px;
    margin-left: 40px;
    margin-top: -10px;
    word-break: break-all;
`;

const EnterMessage = styled.div`
    width: 96%;
    color: black;
    background-color: rgba(1, 1, 1, 0.3);
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 5px;
    display: ${props => (props.isMine ? 'none' : 'block')};
`;

const NeedToLogin = styled.div`
    display: flex;
    color: black;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
