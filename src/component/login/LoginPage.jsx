import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from './style';
import Egg from '../../static/egg.png';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';
import LoginHeader from './LoginHeader';

function MainPage(props) {
    const { id, bgColor } = props;
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            try {
                const res = await axios
                    .get(
                        `${process.env.REACT_APP_URL}member/login/kakao?code=${code}`,
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
            <LoginHeader />
            <DivContent>
                <h1>
                    모의투자로 대비하는 <br />
                    나만의 주식 Life
                </h1>

                <KakaoButton />
                <GoogleButton />
            </DivContent>
            <EasterEgg
                src={Egg}
                onClick={() => window.open('https://ever-rent.vercel.app/')}
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
        letter-spacing: 2.5px;
        font-family: 'Pretendard-Regular';
    }

    @media screen and (max-width: 1023px) {
        margin: 0 auto;
    }
`;

const EasterEgg = styled.img`
    position: absolute;
    width: 140px;
    height: 40px;
    right: 410px;
    bottom: 500px;
    opacity: 0;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;

// const DivButton = styled.div`
//     display: flex;
//     flex-direction: column;

//     button {
//         background: none;
//         border: none;
//         width: 250px;
//     }

//     img {
//         width: 100%;
//     }

//     @media screen and (max-width: 1023px) {
//         margin: 0 auto;
//     }
// `;
