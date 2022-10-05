import React, { useRef, useState, useEffect } from 'react';
import * as StompJs from '@stomp/stompjs';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

function ChatScreen() {
    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState('');
    const client = useRef({});
    console.log(chatList);

    const subscribe = () => {
        client.current.subscribe(`/sub/chat`, body => {
            const jsonBody = JSON.parse(body.body);
            setChatList(props => [...props, jsonBody]);
        });
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
    };

    const publish = ch => {
        if (!client.current.connected) return;
        client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
                type: 'TALK',
                sendTime: Date.now(),
                imageUrl: '',
                nickName: 'Me',
                userId: '',
                message: ch,
            }),
        });
        setChat('');
    };

    const disconnect = () => {
        client.current.deactivate();
    };

    const handleChange = event => {
        // 채팅 입력 시 state에 값 설정
        setChat(event.target.value);
    };

    const handleSubmit = (event, ch) => {
        // 보내기 버튼 눌렀을 때 publish
        event.preventDefault();
        publish(ch);
    };

    useEffect(() => {
        connect();
        return () => disconnect();
    }, []);

    return (
        <StyleChatScreen>
            <Container>
                <MessageBox>
                    {chatList.map(ch => {
                        return (
                            <MessageContainer
                                key={uuid()}
                            >{`${ch.type} : ${ch.nickName} : ${ch.message}`}</MessageContainer>
                        );
                    })}
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
                        <input type="submit" value="의견 보내기" />
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
    background-color: white;
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
    height: 500px;
    padding: 20px;
    margin-right: 30px;
    margin-bottom: -25px;
`;

const Form = styled.form`
    width: 100%;
    margin-right: 30px;
    position: relative;
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
    padding: 5px;
`;

const ButtonBox = styled.div`
    position: absolute;
    right: 13px;
    bottom: 13px;
`;
const MessageContainer = styled.div`
    color: black;
`;
