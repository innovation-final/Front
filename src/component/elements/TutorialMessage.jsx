import React from 'react';
import styled from 'styled-components';

function TutorialMessage({ children, left, top }) {
    return (
        <Wrapper left={left} top={top}>
            <Message>{children}</Message>
        </Wrapper>
    );
}

export default TutorialMessage;

const Wrapper = styled.div`
    position: absolute;
    left: ${props => (props.left ? '-230px' : '-120px')};
    bottom: ${props => (props.left ? '30px' : '-100px')};
    top: ${props => (props.top ? '-80px' : '60px')};
    padding: 10px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primaryColor};
`;
const Message = styled.div`
    color: white;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
`;
