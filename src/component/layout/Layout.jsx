import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import SideBar from './SideBar';
import { WideContext } from '../../context/WideContext';

function Layout({ children, sidebar = true, header = true }) {
    const context = useContext(WideContext);
    const { wide } = context;
    return (
        <StyleLayout>
            {header ? <Header /> : null}
            {sidebar ? <SideBar /> : null}
            <Main wide={wide}>{children}</Main>
        </StyleLayout>
    );
}

export default Layout;

const StyleLayout = styled.div`
    display: relative;
`;

const Main = styled.div`
    position: relative;
    display: flex;
    transform: translateX(${props => (props.wide ? 290 : 70)}px);
    margin-left: 3%;
    margin-right: auto;
    max-width: 100%;
    width: 1280px;
    box-sizing: border-box;
    padding: 30px;

    background-color: black;
    z-index: 11;

    transition: transform ease-in-out 0.3s;
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool.isRequired,
    header: PropTypes.bool.isRequired,
};
