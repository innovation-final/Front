import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../elements/Logo';
import { WideContext } from '../../context/WideContext';

function SideBarHeader() {
    const context = useContext(WideContext);
    const { wide, setWide } = context;

    return (
        <StyleHeader>
            <IconBox onClick={() => setWide(props => !props)}>
                <MenuIcon fontSize="large" />
            </IconBox>
            <LogoBox wide={wide}>
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
    border-bottom: 2px solid #9a9a9a;
    margin-bottom: 10px;
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
    visibility: ${props => (props.wide ? 'visible' : 'hidden')};
`;
