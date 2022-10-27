import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Messenger from './Messenger';
import { toggleLiveChat } from '../../atoms/chat/chatState';

function LiveChat() {
    const [isHovering, setIsHovering] = useState(false);
    const [onLiveChat, setOnLiveChat] = useRecoilState(toggleLiveChat);
    const onClick = () => {
        setOnLiveChat(props => !props);
    };

    return (
        <StyleCircle>
            <MessengerCircle
                onClick={onClick}
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
            />
            <StyleLiveChat>{onLiveChat ? <Messenger /> : null}</StyleLiveChat>
            <ModeCommentIcon fontSize="large" />
            <ChatIcon isHovering={isHovering}>Live Chat</ChatIcon>
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

const ChatIcon = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bold;
    width: 100px;
    height: 40px;
    background-color: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    top: -50px;

    opacity: ${props => (props.isHovering ? 1 : 0)};
    transition: all ease-in-out 0.2s;
`;
