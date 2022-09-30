import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivButton } from './style';

import KakaoLogin from '../../static/kakao_login_large_narrow.png';

function KakaoButton() {
    const navigate = useNavigate();
    const REST_API_KEY = '91598580aab0e9b9f40aa19be86152f6';
    const REDIRECT_URI = 'http://localhost:3000/login/oauth2/code/kakao';
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <DivButton>
            <button
                type="button"
                onClick={() => {
                    navigate('/redirect', {
                        state: {
                            url: KAKAO_AUTH_URI,
                        },
                    });
                }}
            >
                <img src={KakaoLogin} alt="카카오" />
            </button>
        </DivButton>
    );
}

export default KakaoButton;
