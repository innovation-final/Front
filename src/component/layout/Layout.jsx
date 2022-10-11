import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import useWindowSize from '../../hooks/useWindowSize';
import Header from './Header';
import SideBar from './SideBar';
import { wideState } from '../../atoms/atoms';

const responsive = {
    pc: css`
        transform: translate(${props => (props.$wide ? 270 : 70)}px, 57px);
        width: calc(100vw - ${props => (props.$wide ? 270 : 70)}px);
        padding: 30px;
        padding-left: 60px;
    `,
    phone: css`
        transform: translate(70px);
        width: calc(100% - 70px);
        flex-direction: column;
        padding: 10px;
    `,
};

function Layout({ children, sidebar = true, header = true }) {
    const wide = useRecoilValue(wideState);
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);
    return (
        <StyleLayout>
            {header && isPC ? <Header /> : null}
            {sidebar ? <SideBar /> : null}
            <Main $wide={wide} isPC={isPC}>
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
    max-width: 100%;
    box-sizing: border-box;
    z-index: 11;
    transition: all ease-in-out 0.3s;
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool,
    header: PropTypes.bool,
};
