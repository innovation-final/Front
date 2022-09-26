import React, { useState } from 'react';
import styled from 'styled-components';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Messenger from './Messenger';

function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => {
        setIsOpen(props => !props);
    };
    return (
        <StyleCircle>
            <MessengerCircle onClick={onClick} />
            <StyleLiveChat>{isOpen ? <Messenger /> : null}</StyleLiveChat>
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
    background-color: skyblue;
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
