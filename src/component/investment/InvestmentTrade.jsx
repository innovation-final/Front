import React, { useState } from 'react';
import styled from 'styled-components';
import Bought from './trade/Bought';
import Sold from './trade/Sold';
import Status from './trade/Status';

function InvestmentTrade() {
    const [page, setPage] = useState('bought');
    const onClick = event => {
        setPage(event.target.value);
    };

    return (
        <StyleContainer>
            <Wrapper>
                <Buttons>
                    <Button
                        value="bought"
                        onClick={onClick}
                        current={page === 'bought'}
                    >
                        매수
                    </Button>
                    <Button
                        value="sold"
                        onClick={onClick}
                        current={page === 'sold'}
                    >
                        매도
                    </Button>
                    <Button
                        value="status"
                        onClick={onClick}
                        current={page === 'status'}
                    >
                        체결현황
                    </Button>
                </Buttons>
                <PageLayer>
                    {page === 'bought' ? <Bought /> : null}
                    {page === 'sold' ? <Sold /> : null}
                    {page === 'status' ? <Status /> : null}
                </PageLayer>
            </Wrapper>
        </StyleContainer>
    );
}

export default InvestmentTrade;

const StyleContainer = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 97%;
`;

const Wrapper = styled.div`
    padding: 1rem;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: 2px solid ${props => props.theme.secondaryColor};
    background-color: ${props =>
        props.current ? props.theme.secondaryColor : null};
    color: ${props => (props.current ? 'white' : props.theme.secondaryColor)};
    padding: 10px;
    width: 30%;
    border-radius: 15px;
    transition: background-color ease-in-out 0.1s;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
`;

const PageLayer = styled.div``;
