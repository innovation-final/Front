import React, { useMemo, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import useWindowSize from '../../hooks/useWindowSize';
import Header from './Header';
import SideBar from './SideBar';
import { WideContext } from '../../context/WideContext';

const responsive = {
    pc: css`
        transform: translate(${props => (props.wide ? 290 : 70)}px, 57px);
        width: calc(100% - ${props => (props.wide ? 290 : 70)}px);
        padding: 30px;
        padding-left: 60px;
    `,
    phone: css`
        transform: translate(70px);
        width: calc(100% - 70px);
        padding: 10px;
    `,
};

function Layout({ children, sidebar = true, header = true }) {
    const context = useContext(WideContext);
    const { wide } = context;
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);
    return (
        <StyleLayout>
            {header && isPC ? <Header /> : null}
            {sidebar ? <SideBar /> : null}
            <Main wide={wide} isPC={isPC}>
                {children}
            </Main>
        </StyleLayout>
    );
}

export default Layout;

const StyleLayout = styled.div`
    display: relative;
    font-family: 'Pretendard-Regular';
`;

const Main = styled.div`
    ${props => (props.isPC ? responsive.pc : responsive.phone)};
    position: relative;
    display: flex;
    flex-direction: column;
    /* transform: translate(${props => (props.wide ? 290 : 70)}px, 57px);  
    width: calc(100% - ${props => (props.wide ? 290 : 70)}px); */
    max-width: 100%;
    box-sizing: border-box;
    /* padding: 30px;
    padding-left: 60px; */
    z-index: 11;
    transition: all ease-in-out 0.3s;
    /* transition: transform ease-in-out 0.3s; */
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool.isRequired,
    header: PropTypes.bool.isRequired,
};
