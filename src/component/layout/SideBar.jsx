import React, { useContext } from 'react';
import styled from 'styled-components';
import SideBarHeader from '../sidebar/SideBarHeader';
import SideBarItem from '../sidebar/SideBarItem';
import { WideContext } from '../../context/WideContext';

const menuItems = [
    { title: '주식보기' },
    { title: '커뮤니티', subItems: ['자유게시판', '실시간 댓글'] },
    { title: '모의투자' },
    { title: '뉴스전체' },
    { title: '내 업무' },
];

function SideBar() {
    const context = useContext(WideContext);
    const { wide } = context;

    return (
        <StyleSideBar wide={wide}>
            <Container>
                <SideBarHeader wide={wide} />
                {menuItems.map(item => (
                    <SideBarItem
                        key={item.title}
                        title={item.title}
                        subItems={item.subItems}
                    />
                ))}
            </Container>
        </StyleSideBar>
    );
}

export default SideBar;

const StyleSideBar = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: ${props => (props.wide ? 290 : 74)}px;
    height: 100vh;

    background: #c8d6e5;
    border-right: 1px solid #e5e9f2;

    transition: width ease-in-out 0.3s;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
