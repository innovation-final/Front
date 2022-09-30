import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../elements/Logo';
import { wideState } from '../../atoms/atoms';

function SideBarHeader() {
    const [wide, setWide] = useRecoilState(wideState);

    return (
        <StyleHeader>
            <IconBox onClick={() => setWide(props => !props)}>
                <MenuIcon fontSize="large" />
            </IconBox>
            <LogoBox $wide={wide}>
                <Logo />
            </LogoBox>
        </StyleHeader>
    );
}

export default SideBarHeader;

const StyleHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

const IconBox = styled.div`
    font-size: 30px;
    padding: 10px;

    cursor: pointer;
    margin-left: 10px;
`;
const LogoBox = styled.div`
    padding: 10px;
    overflow: hidden;
    visibility: ${props => (props.$wide ? 'visible' : 'hidden')};
`;
