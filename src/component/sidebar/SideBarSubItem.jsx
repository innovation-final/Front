import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { WideContext } from '../../context/WideContext';

const WideAnimation = {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { duration: 0.5 } },
};

function SideBarSubItem({ title, onClickFn, subWide }) {
    const context = useContext(WideContext);
    const { wide } = context;

    return (
        <>
            {subWide && wide ? (
                <StyleSubItem
                    $wide={wide}
                    variants={WideAnimation}
                    initial="start"
                    animate="end"
                    onClick={onClickFn}
                >
                    {title}
                </StyleSubItem>
            ) : null}
            <span />
        </>
    );
}

export default SideBarSubItem;

const StyleSubItem = styled(motion.div)`
    padding: 10px;
    overflow: hidden;
    font-weight: 600;
    color: #222f3e;
    height: ${props => (props.subWide ? '100%' : '0%')};
    text-align: left;

    letter-spacing: -2px;
    font-size: 14px;
    padding-left: 60px;

    transition: height 1s ease-in-out;
`;

SideBarSubItem.propTypes = {
    title: PropTypes.string,
    subWide: PropTypes.bool,
    onClickFn: PropTypes.func,
};
