import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { wideState } from '../../atoms/atoms';

function SideBarItem({ title, onClickFn, param }) {
    const [wide, setWide] = useRecoilState(wideState);
    const { pathname } = useLocation();
    return (
        <StyleItem>
            <ItemContainer onClick={onClickFn}>
                <IconBox onMouseOver={() => setWide(true)}>
                    {title === '주식보기' ? (
                        <BarChartIcon fontSize="large" />
                    ) : null}
                    {title === '커뮤니티' ? (
                        <PeopleIcon fontSize="large" />
                    ) : null}
                    {title === '모의투자' ? (
                        <LayersIcon fontSize="large" />
                    ) : null}
                    {title === '랭킹보드' ? (
                        <MilitaryTechIcon fontSize="large" />
                    ) : null}
                    {title === '관심종목 관리' ? (
                        <PhoneAndroidIcon fontSize="large" />
                    ) : null}
                    {title === '마이페이지' ? (
                        <AssignmentIndIcon fontSize="large" />
                    ) : null}
                </IconBox>
                <TitleBox wide={wide}>
                    {wide ? (
                        <ItemTitle>
                            {title}
                            {param === pathname ? <SelectedMenu /> : null}
                        </ItemTitle>
                    ) : null}
                </TitleBox>
            </ItemContainer>
        </StyleItem>
    );
}

export default SideBarItem;

SideBarItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClickFn: PropTypes.func,
};

const StyleItem = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const IconBox = styled.div`
    padding: 10px;
    margin-left: 10px;
    color: ${props => props.theme.menuTextColor};
    z-index: 1;
    cursor: pointer;
`;

const TitleBox = styled.div`
    opacity: ${props => (props.wide ? 1 : 0)};
    transition: all ease-in-out 0.5s;
`;
const ItemTitle = styled.div`
    display: inline-block;
    padding: 5px;
    font-weight: 600;
    color: ${props => props.theme.menuTextColor};
    letter-spacing: -1px;
    font-size: 17px;
    white-space: nowrap;
    box-sizing: border-box;
    cursor: pointer;
`;

const SelectedMenu = styled.div`
    position: absolute;
    top: 5px;
    left: 10px;
    width: 280px;
    height: 50px;
    border-radius: 15px 0px 0px 15px;
    background-color: ${props => props.theme.bgColor};
    z-index: -1;
`;
