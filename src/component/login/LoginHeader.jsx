import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginHeader() {
    const handleClickMenu = e => {
        e.preventDefault();
        if (e.target.classList.contains('menu-item')) {
            const id = e.target.getAttribute('href').slice(6);
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    return (
        <Header>
            <nav>
                <ul
                    role="presentation"
                    onClick={e => handleClickMenu(e)}
                    onKeyPress={() => {}}
                >
                    <li>
                        <Link to="#main" className="menu-item">
                            PC환경에서 사용을 권장합니다.
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}

export default LoginHeader;

const Header = styled.header`
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 100px;
    left: 50px;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 150px;
    }

    a {
        font-size: 1.8rem;
        text-decoration: none;
        color: white;
    }
`;
