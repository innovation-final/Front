import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const createAnimation = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

function BoardCards({ children }) {
    return (
        <StyleBoardCards
            variants={createAnimation}
            initial="hidden"
            animate="show"
        >
            {children}
        </StyleBoardCards>
    );
}

export default BoardCards;

BoardCards.propTypes = {
    children: PropTypes.node,
};

const StyleBoardCards = styled(motion.div)``;
