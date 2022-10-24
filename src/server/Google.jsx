import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Google() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            try {
                const res = await axios
                    .get(
                        `${process.env.REACT_APP_URL}member/login/google?code=${code}`,
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
    return <div>Google</div>;
}

export default Google;
