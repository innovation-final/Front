import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import * as StompJs from '@stomp/stompjs';
import ChatScreen from './ChatScreen';
import { userState } from '../../atoms/user/userState';
import { chatLogState, toggleLiveChat } from '../../atoms/chat/chatState';

const UpAnimation = {
    start: { opacity: 0, y: 50 },
    end: { opacity: 1, y: 0 },
};
const WS_URL = 'ws://hakjoonkim.shop/stomp';

function Messenger() {
    const setChatList = useSetRecoilState(chatLogState);
    const onChat = useRecoilValue(toggleLiveChat);
    const user = useRecoilValue(userState);
    const client = useRef({});

    const subscribeCallback = data => {
        setChatList(props => [...props, data]);
        const chatScreen = document.getElementById('chatting');
        setTimeout(() => {
            if (chatScreen !== null)
                chatScreen.scrollTop = chatScreen.scrollHeight;
        }, 100);
    };

    const subscribe = () => {
        client.current.subscribe(`/sub/chat`, body => {
            const jsonBody = JSON.parse(body.body);
            subscribeCallback(jsonBody, setChatList);
        });
    };
    const publish = (ch, type) => {
        if (!client.current.connected) return;
        client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
                type,
                sendTime: Date.now(),
                imageUrl: user.profileImg,
                nickName: user.nickname,
                userId: user.id,
                message: ch,
            }),
        });
    };
    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: WS_URL,
            onConnect: () => {
                console.log('success');
                subscribe(setChatList);
            },
        });
        client.current.activate();
        setTimeout(() => {
            publish(`${user.nickname}님이 입장하였습니다.`, 'ENTER');
        }, 500);
    };
    const disconnect = () => {
        publish(`${user.nickname}님이 나가셨습니다.`, 'ENTER');
        client.current.deactivate();
    };

    useEffect(() => {
        if (onChat) connect();
        return () => disconnect();
    }, [onChat]);
    return (
        <StyleMessenger variants={UpAnimation} initial="start" animate="end">
            <Speaker />
            <ChatScreen publish={publish} user={user} />
            <HomeButton />
        </StyleMessenger>
    );
}

export default Messenger;

const StyleMessenger = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 620px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 30px;
    bottom: 40px;
    right: -50px;
    box-shadow: 4px 4px 4px 4px gray;

    @media screen and (min-width: 1400px) and (min-height: 720px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 420px;
        height: 720px;
        background-color: ${props => props.theme.primaryColor};
        border-radius: 30px;
        bottom: 40px;
        right: -50px;
        box-shadow: 4px 4px 4px 4px gray;
    }
`;

const HomeButton = styled.span`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    bottom: 10px;

    &:hover {
        background-color: orange;
        transition: background-color ease-in-out 0.3s;
    }
`;

const Speaker = styled.span`
    position: absolute;
    width: 80px;
    height: 7px;
    border-radius: 10px;
    top: 25px;
    background-color: gray;
`;
