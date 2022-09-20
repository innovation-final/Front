import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import KakaoLogin from '../static/kakao_login_large_narrow.png';

import GoogleLogo from '../static/GoogleLogo.png';
import ScrollIcon from '../static/scroll-icon.png';
import Spinner from '../static/Spinner.gif';
import useWindowSize from '../hooks/useWindowSize';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
    }, [isPC]);

    return (
        <LoginLayout isPC={isPC}>
            {isLoading && (
                <Loading>
                    <img src={Spinner} alt="로딩중입니다" />
                </Loading>
            )}
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
                    <button
                        type="button"
                        onClick={() => console.log('카카오 로그인')}
                    >
                        <img src={KakaoLogin} alt="카카오" />
                    </button>
                    <GoogleLogin
                        clientId="893727311597-528p6s979bj28k9ru1qkg0tulrtsll0s.apps.googleusercontent.com"
                        buttonText="Google 로그인"
                        render={renderProps => (
                            <GoogleButton
                                type="button"
                                onClick={renderProps.onClick}
                            >
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
            <img
                className="scroll"
                src={ScrollIcon}
                alt="아래로 스크롤 해보세요"
            />
        </LoginLayout>
    );
}

export default Login;

const LoginLayout = styled.div`
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    background-color: skyblue;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isPC ? 'row' : 'column')};
    color: white;
    font-weight: bold;

    .scroll {
        width: 2rem;
        position: absolute;
        bottom: 0%;
        left: 49%;
        z-index: 15px;
    }

    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Loading = styled.div`
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header = styled.header`
    width: 256px;
    height: 100%;
    display: flex;
    justify-content: center;

    nav {
        position: absolute;
        top: 100px;
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
    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;

    h1 {
        color: white;
        font-size: 3rem;
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
