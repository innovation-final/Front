import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import MainPage from '../component/login/LoginPage';
import Spinner from '../static/Spinner.gif';
import useWindowSize from '../hooks/useWindowSize';
import LoginHeader from '../component/login/LoginHeader';

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
        <>
            <Helmet>
                <title>{`Stock's talk | 로그인`}</title>
            </Helmet>
            {isLoading && (
                <Loading>
                    <img src={Spinner} alt="로딩중입니다" />
                </Loading>
            )}
            {isPC && <LoginHeader />}

            <MainPage id="main" bgColor="skyblue" />
        </>
    );
}

export default Login;

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
