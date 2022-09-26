import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import ChatScreen from './ChatScreen';

const UpAnimation = {
    start: { opacity: 0, y: 50 },
    end: { opacity: 1, y: 0 },
};

export default function Messenger() {
    return (
        <StyleMessenger variants={UpAnimation} initial="start" animate="end">
            <Speaker />
            <CameraLens />
            <ChatScreen />
            <HomeButton />
        </StyleMessenger>
    );
}

const StyleMessenger = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 720px;
    background-color: skyblue;
    border-radius: 30px;
    bottom: 40px;
    right: -50px;
    box-shadow: 4px 4px 4px 4px gray;
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

const CameraLens = styled.span`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: 25px;
    right: 150px;
    background-color: black;
`;
