import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Messenger from './Messenger';
import { toggleLiveChat, chatLogState } from '../../atoms/chat/chatState';
import { setClient, setProfile, connect, disconnect } from '../../util/stomp';

function LiveChat() {
    const [onLiveChat, setOnLiveChat] = useRecoilState(toggleLiveChat);
    const setChatList = useSetRecoilState(chatLogState);
    const [delay, setDelay] = useState(false);
    const client = useRef({});
    const onClick = async () => {
        if (delay) return;
        setDelay(true);
        setOnLiveChat(props => !props);
        setTimeout(() => {
            setDelay(false);
        }, 500);
        if (!onLiveChat) connect(setChatList);
        else {
            disconnect();
        }
    };

    useEffect(() => {
        setClient(client);
        setProfile();
    }, []);

    return (
        <StyleCircle>
            <MessengerCircle onClick={onClick} />
            <StyleLiveChat>{onLiveChat ? <Messenger /> : null}</StyleLiveChat>
            <ModeCommentIcon />
        </StyleCircle>
    );
}

export default LiveChat;

const StyleLiveChat = styled.span`
    position: relative;
`;
const StyleCircle = styled.span`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    z-index: 999;
    right: 2%;
    bottom: 2%;

    box-shadow: 2px 2px 2px 2px gray;
`;

const MessengerCircle = styled.span`
    position: fixed;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: transparent;
    z-index: 999;
    right: 2%;
    bottom: 2%;

    cursor: pointer;
`;
