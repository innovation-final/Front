import React from 'react';
import styled from 'styled-components';

function MainContentBox({ title, children }) {
    return (
        <Container>
            <h1>{title}</h1>
            <Wrap>{children}</Wrap>
        </Container>
    );
}

export default MainContentBox;

const Container = styled.div`
    h1 {
        font-size: 28px;
        font-weight: bold;
    }

    display: flex;
`;
