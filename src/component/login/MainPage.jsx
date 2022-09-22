import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../../static/kakao_login_large_narrow.png';
import GoogleLogo from '../../static/GoogleLogo.png';
import { LoginLayout } from './style';
import ScrollIcon from '../../static/scroll-icon.png';

function MainPage(props) {
    const { id, bgColor } = props;
    const REST_API_KEY = '91598580aab0e9b9f40aa19be86152f6';
    const REDIRECT_URI = 'http://localhost:3000/login';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            try {
                const res = await axios
                    .get(
                        `https://hakjoonkim.shop/api/member/login/kakao?code=${code}`,
                    )
                    .then(response => {
                        console.log('응답 확인', response);
                        const accessToken = response.headers.authorization;
                        const refreshToken = response.headers['refresh-token'];
                        window.localStorage.setItem(
                            'access-token',
                            accessToken,
                        );
                        window.localStorage.setItem(
                            'refresh-token',
                            refreshToken,
                        );
                        navigate('/');
                    })
                    .catch(err => console.log(err));
                console.log(res);
            } catch (e) {
                console.error(e);
            }
        };
        getToken();
    }, []);

    return (
        <LoginLayout id={id} bgColor={bgColor}>
            <DivContent>
                <h1>
                    모의투자로 대비하는 <br />
                    나만의 주식 Life
                </h1>

                <DivButton>
                    <button
                        type="button"
                        onClick={() => {
                            navigate('/redirect', {
                                state: {
                                    url: KAKAO_AUTH_URI,
                                },
                            });
                        }}
                    >
                        <img src={KakaoLogin} alt="카카오" />
                    </button>

                    <GoogleButton
                        type="button"
                        onClick={() => {
                            navigate('/redirect', {
                                state: {
                                    url: 'https://hakjoonkim.shop/api/member/login/google',
                                },
                            });
                        }}
                    >
                        <img src={GoogleLogo} alt="G" />
                        <span>Google 로그인</span>
                    </GoogleButton>
                </DivButton>
            </DivContent>
            <img
                className="scroll"
                src={ScrollIcon}
                alt="아래로 스크롤 해보세요"
            />
        </LoginLayout>
    );
}

export default MainPage;

const DivContent = styled.div`
    margin-top: auto;
    margin-bottom: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20rem;
    height: 150px;

    h1 {
        color: white;
        font-size: 3rem;
        line-height: 1.5;
        margin-bottom: 1em;
    }

    @media screen and (max-width: 1023px) {
        margin: 0 auto;
    }
`;

const DivButton = styled.div`
    display: flex;
    flex-direction: column;

    button {
        background: none;
        border: none;
        width: 250px;
    }

    img {
        width: 100%;
    }

    @media screen and (max-width: 1023px) {
        margin: 0 auto;
    }
`;

const GoogleButton = styled.button`
    margin-left: 0.3rem;
    width: 15rem !important;
    background-color: white !important;
    border: none;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    height: 3.5rem;
    img {
        width: 1.5rem;
        object-fit: contain;
        margin-left: 0.9rem;

        margin-right: 1.6rem;
    }
    span {
        margin: 0 0.6rem;
        font-size: 18px;
    }
`;
