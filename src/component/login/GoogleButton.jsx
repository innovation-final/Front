import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoogleLogo from '../../static/GoogleLogo.png';

function GoogleButton() {
    const navigate = useNavigate();
    const clientID =
        '763811702193-7dlv53qfrn4h3fbhcoq0m522i60pgg12.apps.googleusercontent.com';
    const redirectURI = 'http://localhost:3000/login/oauth2/code/google';

    return (
        <Button
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
        </Button>
    );
}

export default GoogleButton;

const Button = styled.button`
    margin-left: 0.3rem;
    width: 15rem !important;
    background-color: white !important;
    border: none;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    height: 3.5rem;
    img {
        width: 1.5rem;
        object-fit: contain;
        margin-left: 0.9rem;

        margin-right: 1.6rem;
    }
    span {
        margin: 0 0.6rem;
        font-size: 18px;
    }
`;
