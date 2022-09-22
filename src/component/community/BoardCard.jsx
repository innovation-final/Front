import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const createAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

function BoardCard({ post }) {
    const { title, stockName, member, id, createdAt } = post;

    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);
    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);
    const navigate = useNavigate();
    return (
        <Card
            variants={createAnimation}
            onClick={() => {
                navigate(`/post/${id}`);
            }}
        >
            <CardLayout>
                <CardDivide>
                    <CardStockName>{stockName}</CardStockName>
                    <CardTitle>{title}</CardTitle>
                </CardDivide>
                <CardDivide2>
                    <CardCreatedAt>{`${year}-${month}-${day} ${hour}:${minute}`}</CardCreatedAt>
                    <CardWriter>written by {member.nickname}</CardWriter>
                </CardDivide2>
            </CardLayout>
        </Card>
    );
}

export default BoardCard;
BoardCard.propTypes = {
    title: PropTypes.string,
    stockName: PropTypes.string,
    member: PropTypes.shape({
        email: PropTypes.string,
        nickname: PropTypes.string,
        id: PropTypes.number,
    }),
    id: PropTypes.string,
};

const Card = styled(motion.div)`
    margin: 10px;
    margin-bottom: 30px;
    height: 100px;
    width: 85%;
    border-radius: 15px;
    border: 2px solid skyblue;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    &:hover {
        opacity: 0.7;
    }
`;

const CardLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    padding: 5px;
`;
const CardDivide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 2%;
    width: 100%;
`;
const CardDivide2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
`;
const CardTitle = styled.div`
    font-size: 25px;
    overflow: hidden;
`;
const CardStockName = styled.div`
    font-size: 15px;
    overflow: hidden;
    margin-bottom: 4%;
`;
const CardWriter = styled.div`
    font-size: 13px;
`;
const CardCreatedAt = styled.div`
    font-size: 13px;
`;
