import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import logo from '../../static/image.png';
import darkLogo from '../../static/image_dark.png';
import { isDarkSelector } from '../../atoms/common/commonState';

// 나중에 이미지로 바꿀 예정
function Logo() {
    const navigate = useNavigate();
    const isDark = useRecoilValue(isDarkSelector);
    console.log(isDark);

    return (
        <StyleLogo
            src={isDark === 'darkMode' ? darkLogo : logo}
            onClick={() => navigate('/')}
        />
    );
}

export default Logo;

const StyleLogo = styled.img`
    width: 180px;
    height: 30px;
    object-fit: cover;
    margin-left: -10px;
    cursor: pointer;
`;
