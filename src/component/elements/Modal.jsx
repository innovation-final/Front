import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ children, width = 700, height = 650, setIsOpen }) {
    return (
        <BackGround>
            <ModalBox width={width} height={height}>
                {children}
                <ExitButton onClick={setIsOpen}>
                    <CloseIcon fontSize="large" />
                </ExitButton>
            </ModalBox>
        </BackGround>
    );
}

export default Modal;

const BackGround = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: inline-flex;
    transform: translate(-70px, -57px);
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    z-index: 998;
`;
const ModalBox = styled.div`
    position: relative;
    padding: 30px;
    border: 3px solid ${props => props.theme.secondaryColor};
    border-radius: 10px;
    background-color: ${props => props.theme.bgColor};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    z-index: 998;
`;

const ExitButton = styled.div`
    position: absolute;
    color: skyblue;
    right: 20px;
    top: 20px;
    z-index: 999;
`;
