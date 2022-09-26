import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Kakao() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            try {
                const res = await axios
                    .get(
                        `https://hakjoonkim.shop/api/member/login/kakao?code=${code}`,
                    )
                    .then(res => {
                        console.log('응답 확인', res);
                        const accessToken = res.headers.authorization;
                        const refreshToken = res.headers['refresh-token'];
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
    return <div>Kakao</div>;
}

export default Kakao;