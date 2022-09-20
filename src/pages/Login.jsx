import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';

function Login() {
    const [isMobile, setIsMobile] = useState(false);
    const throttled = useCallback(throttle(newValue => newValue(), 500));
    const handleResize = () => {
        if (window.innerWidth <= 1023) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
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
        <LoginLayout isMobile={isMobile}>
            <Header>
                <ul>
                    <li>스톡스톡</li>
                    <li>만든 사람들</li>
                    <li>프로젝트 소개</li>
                </ul>
            </Header>
            로그인페이지입니다.
        </LoginLayout>
    );
}

export default Login;

const LoginLayout = styled.div`
    display: flex;
    flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
`;

const Header = styled.header`
    width: 256px;
    height: 100%;
`;
