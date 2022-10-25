import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindowSize';
import Header from './Header';
import SideBar from './SideBar';
import { wideState } from '../../atoms/common/commonState';
import MobileMenu from './MobileMenu';

const responsive = {
    pc: css`
        transform: translate(${props => (props.$wide ? 270 : 70)}px, 57px);
        width: calc(100vw - ${props => (props.$wide ? 270 : 70)}px);
        padding: 10px;
        padding-left: 60px;
    `,
    phone: css`
        transform: translate(0px, 57px);
        flex-direction: column;
        min-width: 100%;
        padding: 10px;
    `,
};

function Layout({ children, sidebar = true, header = true }) {
    const wide = useRecoilValue(wideState);
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);
    const menuRender = () => {
        if (sidebar) {
            if (isPC) {
                return <SideBar />;
            }
            return <MobileMenu />;
        }
        return null;
    };
    return (
        <StyleLayout>
            {header && isPC ? <Header /> : null}
            {sidebar && menuRender()}
            <Main
                $wide={wide}
                ispc={isPC}
                initial={
                    isPC
                        ? { opacity: 0, x: wide ? 260 : 50, y: 57 }
                        : { opacity: 0, x: 0, y: 57 }
                }
                animate={
                    isPC
                        ? {
                              opacity: 1,
                              x: wide ? 270 : 70,
                              y: 57,
                              transition: {
                                  duration: 0.5,
                                  type: 'linear',
                              },
                          }
                        : { opacity: 1, x: 0, y: 57 }
                }
            >
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

const Main = styled(motion.div)`
    ${props => (props.ispc ? responsive.pc : responsive.phone)};
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-width: 480px;
    height: 90vh;
    box-sizing: border-box;
    z-index: 11;
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.bool,
    header: PropTypes.bool,
};
