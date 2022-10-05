import React, { useRef, useState, useEffect } from 'react';
import * as StompJs from '@stomp/stompjs';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

function ChatScreen() {
    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState('');
    const client = useRef({});
    const imageUrl = localStorage.getItem('imgUrl');
    const nickName = localStorage.getItem('nickName');
    console.log(chatList);

    const subscribeCallback = data => {
        setChatList(props => [...props, data]);
        const chatScreen = document.getElementById('chatting');
        setTimeout(() => {
            chatScreen.scrollTop = chatScreen.scrollHeight;
        }, 100);
    };

    const subscribe = () => {
        client.current.subscribe(`/sub/chat`, body => {
            const jsonBody = JSON.parse(body.body);
            subscribeCallback(jsonBody);
        });
    };

    const publish = (ch, type) => {
        if (!client.current.connected) return;
        client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
                type,
                sendTime: Date.now(),
                imageUrl,
                nickName,
                userId: '',
                message: ch,
            }),
        });
        setChat('');
    };

    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: 'ws://hakjoonkim.shop/stomp',
            onConnect: () => {
                console.log('success');
                subscribe();
            },
        });
        client.current.activate();
        setTimeout(() => {
            publish(`${nickName}님이 입장하였습니다.`, 'ENTER');
        }, 500);
    };

    const disconnect = () => {
        client.current.deactivate();
    };

    const handleChange = event => {
        setChat(event.target.value);
    };

    const handleSubmit = (event, ch) => {
        // 보내기 버튼 눌렀을 때 publish
        event.preventDefault();
        publish(ch, 'TALK');
    };

    useEffect(() => {
        connect();
        return () => disconnect();
    }, []);

    return (
        <StyleChatScreen>
            <Container>
                <MessageBox id="chatting">
                    {chatList.map(ch =>
                        ch.type === 'TALK' ? (
                            <Wrapper
                                key={uuid()}
                                $isMine={
                                    ch.nickName ===
                                    localStorage.getItem('nickName')
                                }
                            >
                                <UserInfo>
                                    <ProfileImg
                                        src={`${ch.imageUrl}`}
                                        isMine={
                                            ch.nickName ===
                                            localStorage.getItem('nickName')
                                        }
                                    />
                                    <UserName
                                        isMine={
                                            ch.nickName ===
                                            localStorage.getItem('nickName')
                                        }
                                    >{`${ch.nickName}`}</UserName>
                                </UserInfo>
                                <MessageContainer
                                    isMine={
                                        ch.nickName ===
                                        localStorage.getItem('nickName')
                                    }
                                >{`${ch.message}`}</MessageContainer>
                            </Wrapper>
                        ) : (
                            <EnterMessage>{`${ch.message}`}</EnterMessage>
                        ),
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
    width: 380px;
    height: 600px;
    border-radius: 15px;
    background-color: #d1e8ed;
    z-index: 1;
`;
const Container = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 490px;
    padding: 20px;
    margin-right: 30px;
    overflow: scroll;
`;

const Form = styled.form`
    width: 100%;
    margin-right: 30px;
    position: relative;
    margin-top: -10px;
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
    width: 100%;
    color: black;
    background-color: rgba(1, 1, 1, 0.3);
`;
