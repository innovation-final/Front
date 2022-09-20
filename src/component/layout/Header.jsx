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
    border-bottom: 2px solid #9a9a9a;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    background-color: white;
`;
