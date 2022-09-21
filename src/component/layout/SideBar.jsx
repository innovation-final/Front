import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SideBarHeader from '../sidebar/SideBarHeader';
import SideBarItem from '../sidebar/SideBarItem';
import { WideContext } from '../../context/WideContext';

function SideBar() {
    const navigate = useNavigate();
    const context = useContext(WideContext);
    const { wide } = context;

    const menuItems = [
        { title: '주식보기', onClickFn: () => navigate('/') },
        {
            title: '커뮤니티',
            onClickFn: () => navigate('/'),
            subItems: [
                {
                    title: '자유게시판',
                    onClickFn: () => navigate('/community'),
                },
                { title: '실시간 댓글', onClickFn: () => navigate('/') },
            ],
        },
        { title: '모의투자', onClickFn: () => navigate('/') },
        { title: '뉴스전체', onClickFn: () => navigate('/') },
        {
            title: '내 정보',
            onClickFn: () => navigate('/'),
            subItems: [
                { title: '내 정보 수정', onClickFn: () => navigate('/') },
                { title: '관심종목 관리', onClickFn: () => navigate('/') },
            ],
        },
    ];

    return (
        <StyleSideBar $wide={wide}>
            <Container>
                <SideBarHeader $wide={wide} />
                {menuItems.map(item => (
                    <SideBarItem
                        key={item.title}
                        title={item.title}
                        subItems={item.subItems}
                        onClickFn={item.onClickFn}
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
    width: ${props => (props.$wide ? 290 : 74)}px;
    height: 100vh;
    background-color: skyblue;
    color: white;

    border-right: 1px solid white;

    transition: width ease-in-out 0.3s;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
