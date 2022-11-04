import React, { useEffect, useState, useRef, useMemo } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import MainPage from '../component/login/LoginPage';
import Spinner from '../static/Spinner.gif';
import Developers from '../component/login/Developer';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const outerDivRef = useRef();
    const { width } = useWindowSize();
    const isPC = useMemo(() => {
        return width >= 1024;
    }, [width]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    useEffect(() => {
        const wheelHandler = e => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: 'smooth',
                    });
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);

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
            <Outer ref={outerDivRef} isPC={isPC} className="outer">
                <MainPage id="main" bgColor="skyblue" />
                {isPC ? <Developers /> : null}
            </Outer>
        </>
    );
}

export default Login;

const Outer = styled.div`
    height: ${props => (props.isPC ? 100 : 120)}vh;
    overflow-y: auto;
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
