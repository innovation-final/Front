import React from 'react';
import styled from 'styled-components';
import HeaderOverview from '../header/HeaderOverview';
import HeaderProfile from '../header/HeaderProfile';
import Sse from '../sse/sse';

function Header() {
    return (
        <StyleHeader>
            <Wrapper>
                <HeaderOverview />
                <HeaderProfile visible />
                <Sse />
            </Wrapper>
        </StyleHeader>
    );
}

export default Header;

const StyleHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid ${props => props.theme.layoutBorderColor};
    z-index: 999;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.primaryColor};
    overflow-y: hidden;
    width: 100%;
`;
