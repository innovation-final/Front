import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import SideBar from './SideBar';

function Layout({ children, sidebar = true, header = true }) {
    return (
        <LayoutWrapper>
            {header ? <Header /> : null}
            {sidebar ? <SideBar /> : null}
            <Main>{children}</Main>
        </LayoutWrapper>
    );
}

export default Layout;

const LayoutWrapper = styled.div``;

const Main = styled.div``;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool.isRequired,
    header: PropTypes.bool.isRequired,
};
