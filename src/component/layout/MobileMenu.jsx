import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import MobileMenuHeader from '../mobile/MobileMenuHeader';
import MobileMenuItem from '../mobile/MobileMenuItem';
import { wideState, isDarkSelector } from '../../atoms/common/commonState';

function MobileMenu() {
    const navigate = useNavigate();
    const wide = useRecoilValue(wideState);
    const [isDark, setDarkMode] = useRecoilState(isDarkSelector);
    // const setIsDark = useSetRecoilState(isDarkState);
    const [isLogin] = useState(!!localStorage.getItem('access-token'));

    const logOutFunction = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    const logInFunction = () => {
        navigate('/');
    };
    const setIsDark = () => {
        if (isDark === 'lightMode') {
            localStorage.setItem('app_theme', 'darkMode');
        } else {
            localStorage.setItem('app_theme', 'lightMode');
        }
        setDarkMode();
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
            onClickFn: () => setIsDark(),
        },
        {
            title: isLogin ? '로그아웃' : '로그인',
            onClickFn: isLogin ? () => logOutFunction() : () => logInFunction(),
        },
    ];

    return (
        <StyleSideBar $wide={wide}>
            <Container>
                <MobileMenuHeader $wide={wide} />
                <TopCotainer>
                    {menuItems.map(item => (
                        <MobileMenuItem
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
                        <MobileMenuItem
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

export default MobileMenu;

const StyleSideBar = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 5.5vh;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.layoutBorderColor};
    transition: all ease-in-out 0.3s;
    overflow: ${props => (props.$wide ? 'visible' : 'hidden')};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopCotainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
