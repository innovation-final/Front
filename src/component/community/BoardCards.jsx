import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BoardCard from './BoardCard';

const createAnimation = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

function BoardCards({ data }) {
    console.log(data);
    return (
        <Container>
            <StyleBoardCards
                variants={createAnimation}
                initial="hidden"
                animate="show"
            >
                {data &&
                    data.map(post => <BoardCard key={post.id} post={post} />)}
            </StyleBoardCards>
        </Container>
    );
}

export default BoardCards;

const Container = styled.div``;
const StyleBoardCards = styled(motion.div)``;
