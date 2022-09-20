import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';
import { WideContext } from '../../context/WideContext';
import SideBarSubItem from './SideBarSubItem';

const WideAnimation = {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { duration: 0.5 } },
};

function SideBarItem({ title, subItems }) {
    const context = useContext(WideContext);
    const { wide, setWide } = context;

    const [subWide, setSubWide] = useState(false);
    return (
        <>
            <StyleItem>
                <ItemContainer>
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
                        {title === '뉴스전체' ? (
                            <NewspaperIcon fontSize="large" />
                        ) : null}
                        {title === '내 정보' ? (
                            <PhoneAndroidIcon fontSize="large" />
                        ) : null}
                    </IconBox>
                    {wide ? (
                        <ItemTitle
                            variants={WideAnimation}
                            initial="start"
                            animate="end"
                        >
                            {title}
                        </ItemTitle>
                    ) : null}
                </ItemContainer>
                <ArrowContainer
                    wide={wide}
                    subWide={subWide}
                    onClick={() => setSubWide(props => !props)}
                >
                    {subItems ? <ArrowRightIcon /> : null}
                </ArrowContainer>
            </StyleItem>
            {subWide ? (
                <SubContainer
                    variants={WideAnimation}
                    initial="start"
                    animate="end"
                >
                    {subItems &&
                        subItems.map(sub => (
                            <SideBarSubItem title={sub} subWide={subWide} />
                        ))}
                </SubContainer>
            ) : null}
        </>
    );
}

export default SideBarItem;

SideBarItem.propTypes = {
    title: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(PropTypes.string),
};

const StyleItem = styled.div`
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
    color: #525961;
    cursor: pointer;
`;
const ItemTitle = styled(motion.div)`
    padding: 5px;
    overflow: hidden;
    font-weight: 600;
    color: #525961;
    letter-spacing: -1px;
    font-size: 17px;

    cursor: pointer;
`;

const SubContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: right;
    overflow: hidden;
`;

const ArrowContainer = styled.div`
    margin-right: 10px;
    color: #525961;
    visibility: ${props => (props.wide ? 'visible' : 'hidden')};
    transform: rotate(${props => (props.subWide ? 90 : 0)}deg);
    transition: transform ease-in-out 0.3s;
`;
