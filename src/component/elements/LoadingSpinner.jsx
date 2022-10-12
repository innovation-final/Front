import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

function LoadingSpinner() {
    return (
        <Wrapper>
            <Spinner />
        </Wrapper>
    );
}

export default LoadingSpinner;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const LoadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const Spinner = styled(motion.div)`
    width: 40px;
    height: 40px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    border-right: 5px solid skyblue;
    border-radius: 50%;
    animation: ${LoadingAnimation} 1s linear infinite;
`;
