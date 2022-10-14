import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import SideBarHeader from '../sidebar/SideBarHeader';
import SideBarItem from '../sidebar/SideBarItem';
import { wideState, isDarkState } from '../../atoms/common/commonState';

function SideBar() {
    const navigate = useNavigate();
    const wide = useRecoilValue(wideState);
    const setIsDark = useSetRecoilState(isDarkState);
    const [isLogin] = useState(!!localStorage.getItem('access-token'));
    const logOutFunction = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    const logInFunction = () => {
        navigate('/');
    };

    const menuItems = [
        {
            title: '주식보기',
            onClickFn: () => navigate('/stock'),
            param: '/stock',
        },
        {
            title: '커뮤니티',
            onClickFn: () => navigate('/community'),
            param: '/community',
        },
        {
            title: '모의투자',
            onClickFn: () => navigate('/investment'),
            param: '/investment',
        },
        {
            title: '랭킹보드',
            onClickFn: () => navigate('/ranking'),
            param: '/ranking',
        },
        {
            title: '관심종목 관리',
            onClickFn: () => navigate('/interest'),
            param: '/interest',
        },
        {
            title: '마이페이지',
            onClickFn: () => navigate('/mypage'),
            param: '/mypage',
        },
    ];
    const menuBottomItems = [
        {
            title: '다크모드',
            onClickFn: () => setIsDark(props => !props),
        },
        {
            title: isLogin ? '로그아웃' : '로그인',
            onClickFn: isLogin ? () => logOutFunction() : () => logInFunction(),
        },
    ];

    return (
        <StyleSideBar $wide={wide}>
            <Container>
                <TopCotainer>
                    <SideBarHeader $wide={wide} />
                    {menuItems.map(item => (
                        <SideBarItem
                            key={item.title}
                            title={item.title}
                            subItems={item.subItems}
                            param={item.param}
                            onClickFn={item.onClickFn}
                        />
                    ))}
                </TopCotainer>
                <BottomContainer>
                    {menuBottomItems.map(item => (
                        <SideBarItem
                            key={item.title}
                            title={item.title}
                            subItems={item.subItems}
                            param={item.param}
                            onClickFn={item.onClickFn}
                        />
                    ))}
                </BottomContainer>
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
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};

    border-right: 1px solid ${props => props.theme.layoutBorderColor};

    transition: width ease-in-out 0.3s;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;

const TopCotainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
