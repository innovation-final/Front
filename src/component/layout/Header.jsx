import React from 'react';
import styled from 'styled-components';
import HeaderOverview from '../header/HeaderOverview';
import HeaderProfile from '../header/HeaderProfile';

function Header() {
    return (
        <StyleHeader>
            <HeaderOverview />
            <HeaderProfile />
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    background-color: ${props => props.theme.primaryColor};
`;
