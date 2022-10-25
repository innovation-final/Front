import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../elements/Logo';
import { wideState } from '../../atoms/common/commonState';
import HeaderProfile from '../header/HeaderProfile';

function MobileMenuHeader() {
    const [wide, setWide] = useRecoilState(wideState);

    return (
        <StyleHeader>
            <IconBox onClick={() => setWide(props => !props)}>
                <MenuIcon fontSize="large" />
            </IconBox>
            <LogoBox $wide={wide}>
                <Logo />
            </LogoBox>
            <HeaderProfile visible={false} />
        </StyleHeader>
    );
}

export default MobileMenuHeader;

const StyleHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.layoutBorderColor};
    margin-bottom: 10px;
`;

const IconBox = styled.div`
    position: absolute;
    left: 0;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
`;
const LogoBox = styled.div`
    padding: 10px;
`;
