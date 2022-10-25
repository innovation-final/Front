import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivButton } from './style';
import KakaoLogin from '../../static/kakao_login_large_narrow.png';

function KakaoButton() {
    const navigate = useNavigate();
    const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
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
