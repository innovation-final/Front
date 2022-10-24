import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from './style';
import GoogleButton from './GoogleButton';
import KakaoButton from './KakaoButton';

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
            <DivContent>
                <h1>
                    모의투자로 대비하는 <br />
                    나만의 주식 Life
                </h1>

                <KakaoButton />
                <GoogleButton />
            </DivContent>
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
