import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { isMobile } from 'react-device-detect';
import GoogleLogin from 'react-google-login';
import KakaoLogin from '../static/kakao_login_large_narrow.png';
import Background from '../static/backgroundImage.jpg';
import GoogleLogo from '../static/GoogleLogo.png';

function Login() {
    console.log(isMobile);
    const [isPC, setIsPC] = useState(!isMobile);
    const throttled = useCallback(throttle(newValue => newValue(), 500));
    const handleResize = () => {
        if (window.innerWidth <= 1023) {
            setIsPC(false);
        } else {
            setIsPC(true);
        }
    };

    const throttleResize = () => {
        throttled(handleResize);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', throttleResize);
        return () => {
            window.removeEventListener('resize', throttleResize);
        };
    }, []);
    return (
        <LoginLayout isPC={isPC}>
            {isPC && (
                <Header>
                    <nav>
                        <ul>
                            <li>스톡스톡</li>
                            <li>만든 사람들</li>
                            <li>프로젝트 소개</li>
                        </ul>
                    </nav>
                </Header>
            )}
            <DivContent>
                <h1>
                    모의투자로 대비하는 <br />
                    나만의 주식 Life
                </h1>

                <DivButton>
                    <button type="button">
                        <img src={KakaoLogin} alt="카카오" />
                    </button>
                    <GoogleLogin
                        clientId="893727311597-528p6s979bj28k9ru1qkg0tulrtsll0s.apps.googleusercontent.com"
                        buttonText="Google 로그인"
                        render={() => (
                            <GoogleButton type="button">
                                <img src={GoogleLogo} alt="G" />
                                <span>Google 로그인</span>
                            </GoogleButton>
                        )}
                        cookiePolicy="single_host_origin"
                        onSuccess={() => console.log('흠')}
                        onFailure={() => console.log('에러')}
                    />
                </DivButton>
            </DivContent>
        </LoginLayout>
    );
}

export default Login;

const LoginLayout = styled.div`
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    background: url(${Background}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isPC ? 'row' : 'column')};
    color: white;
    font-weight: bold;
`;

const Header = styled.header`
    width: 256px;
    height: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        width: 100%;
    }

    nav {
        position: absolute;
        top: 150px;
        left: 50px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 150px;
    }
`;

const DivContent = styled.div`
    margin-top: auto;
    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;

    h1 {
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 1em;
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
