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
    flex-direction: column;
    transform: translateX(${props => (props.wide ? 290 : 70)}px);
    margin-left: 3%;
    margin-right: auto;
    /* width: 80vw; */
    width: calc(80vw + ${props => (props.wide ? 0 : 220)}px);
    max-width: 100%;
    box-sizing: border-box;
    padding: 30px;
    z-index: 11;
    transition: all ease-in-out 0.3s;
    /* transition: transform ease-in-out 0.3s; */
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool.isRequired,
    header: PropTypes.bool.isRequired,
};
