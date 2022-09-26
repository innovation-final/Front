import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DivButton, GoogleBtn } from './style';
import GoogleLogo from '../../static/GoogleLogo.png';

function GoogleButton() {
    const navigate = useNavigate();
    const clientID =
        '763811702193-7dlv53qfrn4h3fbhcoq0m522i60pgg12.apps.googleusercontent.com';
    const redirectURI = 'http://localhost:3000/login/oauth2/code/google';

    return (
        <DivButton>
            <GoogleBtn
                type="button"
                onClick={() => {
                    navigate('/redirect', {
                        state: {
                            url: `https://accounts.google.com/o/oauth2/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`,
                        },
                    });
                }}
            >
                <img src={GoogleLogo} alt="G" />
                <span>Google 로그인</span>
            </GoogleBtn>
        </DivButton>
    );
}

export default GoogleButton;
