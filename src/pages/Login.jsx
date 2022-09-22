import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
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
            {isLoading && (
                <Loading>
                    <img src={Spinner} alt="로딩중입니다" />
                </Loading>
            )}
            {isPC && <LoginHeader />}

            <MainPage id="main" bgColor="skyblue" />
            <LoginLayout id="developer" bgColor="white" />
            <LoginLayout id="introduce" bgColor="black" />
        </>
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
    background-color: ${props => props.bgColor};

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
