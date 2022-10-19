import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import SideBarHeader from '../sidebar/SideBarHeader';
import SideBarItem from '../sidebar/SideBarItem';
import { wideState, isDarkSelector } from '../../atoms/common/commonState';

function SideBar() {
    const navigate = useNavigate();
    const wide = useRecoilValue(wideState);
    const [isDark, setDarkMode] = useRecoilState(isDarkSelector);
    // const setIsDark = useSetRecoilState(isDarkState);
    const [isLogin] = useState(!!localStorage.getItem('access-token'));

    const logOutFunction = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    const [pushStatus, setPushStatus] = useState(null);

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
    const onChangeToggle = e => {
        setPushStatus(!pushStatus); // toggle 기능
        // const params = { userId: userInfo.userId, pushOn: e.target.checked };
        `https://hakjoonkim.shop/api/subscribe/`('xxx')
            .then(res => {
                if (res.data.ok) {
                    if (e.target.checked) {
                        // checked시 알람 발송(기본값)
                        alert('푸쉬 알람 설정이 저장되었습니다.');
                    } else {
                        // unchecked시 알람 미발송
                        alert('푸쉬 알람 미발송 처리 되었습니다.');
                    }
                }
            })
            .catch(err => console.log(err));
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

                    {/* <ToggleContainer>
                        <ToggleLayout className="relative inline-block w-12 mr-2 align-middle">
                            <input
                                type="checkbox"
                                name="toggle"
                                id="toggle"
                                onChange={onChangeToggle}
                                checked={pushStatus}
                                className={
                                    pushStatus ? (
                                        <Toggle />
                                    ) : (
                                        ' left-0 bg-white absolute block w-7 h-7 rounded-full border-4 appearance-none cursor-pointer'
                                    )
                                }
                            /> */}
                    {/* <label
                                htmlFor="toggle"
                                className="block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer"
                            ></label> */}
                    {/* </ToggleLayout>
                        <p>{pushStatus ? '설정' : '미설정'}</p>
                    </ToggleContainer> */}
                </TopCotainer>

                <BottomContainer>
                    <StyleItem>
                        {' '}
                        <TitleBox>
                            <PushText>푸쉬알림</PushText>
                        </TitleBox>
                        <ToggleInput
                            type="checkbox"
                            id="toggle"
                            hidden
                            onChange={onChangeToggle}
                        />
                        <ToggleSwitch htmlFor="toggle">
                            <ToggleButton htmlFor="toggle" />
                        </ToggleSwitch>{' '}
                        <p>{pushStatus ? 'On' : 'Off'}</p>
                    </StyleItem>

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

const StyleItem = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TitleBox = styled.div`
    display: flex;
    padding: 10px;
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
`;
const PushText = styled.div`
    display: inline-block;
    padding: 5px;
    font-weight: 600;
    color: ${props => props.theme.menuTextColor};
    letter-spacing: -1px;
    font-size: 17px;
    white-space: nowrap;
    box-sizing: border-box;
    cursor: pointer;
`;
// const ToggleContainer = styled.div`
//     display: flex;
//     gap: 10px;
//     align-items: center;
// `;
// const ToggleLayout = styled.div`
//     position: relative;
//     display: inline-block;
//     width: 100px;
//     vertical-align: middle;
// `;

// const Toggle = styled.div`
//     right: 0;
//     transition-duration: 200s;
//     transition: ease-in;
//     display: block;
//     border-radius: 100%;
//     background-color: yellow;
//     position: absolute;
//     width: 80px;
//     height: 50px;
//     border: 4px;
//     outline: none;
//     appearance: none;
// `;

const ToggleSwitch = styled.label`
    width: 80px;
    margin: 10px;
    height: 45px;
    display: block;
    position: relative;
    border-radius: 32px;
    background-color: #fff;
    box-shadow: 0 0 1rem 3px rgba(0 0 0 / 15%);
    cursor: pointer;
    transition: all 0.2s ease-in;
`;

const ToggleButton = styled.span`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #42a8c7;
    transition: all 0.2s ease-in;
`;
const ToggleInput = styled.input`
    &:checked ~ ${ToggleSwitch} {
        background: rgb(240, 154, 78);
    }
    &:checked ~ ${ToggleSwitch} ${ToggleButton} {
        background-color: #004565;
        left: calc(100% - 2.8rem);
    }
`;
