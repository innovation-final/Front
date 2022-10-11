import React from 'react';
import styled from 'styled-components';

function Status() {
    return (
        <Container>
            <Header>
                <Table>
                    <Item>종목명</Item>
                </Table>
            </Header>
        </Container>
    );
}

export default Status;

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
`;

const Header = styled.div``;
const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
const Item = styled.div``;
