import React from 'react';
import styled from 'styled-components';

function MainContentBox({ title, children }, ref) {
    return (
        <Container ref={ref}>
            <h1>{title}</h1>
            <Wrap>{children}</Wrap>
        </Container>
    );
}

export default React.forwardRef(MainContentBox);

const Container = styled.div`
    h1 {
        font-size: 20px;
        font-weight: bold;
    }
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid skyblue;
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
    height: 38vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
